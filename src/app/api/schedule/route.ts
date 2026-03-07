import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { readFileSync } from "fs";
import { join } from "path";

export async function GET(request: NextRequest) {
    try {
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;

        if (!spreadsheetId) {
            return NextResponse.json({ message: "Service not configured" }, { status: 500 });
        }

        const auth = await getAuth();
        const sheets = google.sheets({ version: "v4", auth });

        let bookedSlots: string[] = [];
        try {
            // Read the Meetings tab
            const response = await sheets.spreadsheets.values.get({
                spreadsheetId,
                range: "'Meetings'!B:B",
            });

            const rows = response.data.values;
            if (rows && rows.length > 0) {
                // Return raw values but trimmed. normalization happens on frontend/POST check.
                bookedSlots = rows.map(row => (row[0] || "").toString().trim()).filter(Boolean);
            }
        } catch (err: any) {
            // If the sheet doesn't exist, it's fine, it means no bookings yet
            if (err.code !== 400 && !err.message?.includes('range')) {
                throw err;
            }
        }

        return NextResponse.json({ bookedSlots }, { status: 200 });
    } catch (error) {
        console.error("API GET error:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, timeSlot } = body;

        if (!email || !timeSlot) {
            return NextResponse.json({ message: "Email and time slot are required" }, { status: 400 });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ message: "Invalid email format" }, { status: 400 });
        }

        const spreadsheetId = process.env.GOOGLE_SHEET_ID;

        if (!spreadsheetId) {
            return NextResponse.json({ message: "Service not configured" }, { status: 500 });
        }

        const auth = await getAuth();
        const sheets = google.sheets({ version: "v4", auth });

        // 1. Check for double booking
        let bookedSlots: string[] = [];
        try {
            const getResponse = await sheets.spreadsheets.values.get({
                spreadsheetId,
                range: "'Meetings'!B:B",
            });
            bookedSlots = (getResponse.data.values || []).map(row => (row[0] || "").toString().trim()).filter(Boolean);
        } catch (err: any) {
            if (err.code !== 400 && !err.message?.includes('range')) {
                throw err;
            }
        }

        const requestedTime = new Date(timeSlot).getTime();
        const isAlreadyBooked = bookedSlots.some(slot => {
            const bookedTime = new Date(slot).getTime();
            return !isNaN(bookedTime) && bookedTime === requestedTime;
        });

        if (isAlreadyBooked) {
            return NextResponse.json({ message: "This time slot is already booked. Please choose another one." }, { status: 409 });
        }

        // 2. Append booking
        const now = new Date();
        const timestamp = now.toISOString();

        // Columns: A: Timestamp, B: TimeSlot, C: Email
        const rowData = [timestamp, timeSlot, email];

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: "'Meetings'!A:C",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [rowData],
            },
        });

        return NextResponse.json({ message: "Success" }, { status: 200 });
    } catch (error) {
        console.error("API POST error:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}

async function getAuth() {
    let serviceAccountKey;

    try {
        const keyPath = join(process.cwd(), "service-account.json");
        const keyFile = readFileSync(keyPath, "utf-8");
        serviceAccountKey = JSON.parse(keyFile);
    } catch {
        const credentials = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
        if (!credentials) {
            throw new Error("No service account credentials found");
        }
        serviceAccountKey = JSON.parse(credentials);
    }

    return new google.auth.GoogleAuth({
        credentials: serviceAccountKey,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
}
