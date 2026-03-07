"use client";

import { useState, useEffect } from "react";
import { format, addDays, isBefore, isAfter, startOfDay, isWeekend, isMonday, isWednesday, parseISO } from "date-fns";
import { formatInTimeZone, toZonedTime } from "date-fns-tz";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const NY_TIMEZONE = "America/New_York";

interface ScheduledSlot {
    time: string; // ISO string of the booked time
}

export function SchedulingModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [bookedSlots, setBookedSlots] = useState<string[]>([]);
    const [isLoadingSlots, setIsLoadingSlots] = useState(false);

    // Fetch booked slots when calendar opens or date changes
    useEffect(() => {
        if (isOpen) {
            const fetchBookedSlots = async () => {
                setIsLoadingSlots(true);
                try {
                    // This will be implemented in the next step
                    const res = await fetch("/api/schedule");
                    if (res.ok) {
                        const data = await res.json();
                        setBookedSlots(data.bookedSlots || []);
                    }
                } catch (err) {
                    console.error("Failed to fetch slots", err);
                } finally {
                    setIsLoadingSlots(false);
                }
            };

            fetchBookedSlots();
        }
    }, [isOpen]);

    // Handle dialog close/reset
    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setDate(undefined);
                setSelectedSlot(null);
                setEmail("");
                setError("");
                setSuccess(false);
            }, 300);
        }
    }, [isOpen]);

    // Date Logic limits (Max 2 weeks from today)
    const today = new Date();
    const maxDate = addDays(today, 14);

    // Generate Available Slots for a Given Date in NY Time
    const getAvailableSlots = (selectedDate: Date) => {
        if (isWeekend(selectedDate)) return [];

        const isMon = isMonday(selectedDate);
        const isWed = isWednesday(selectedDate);

        // Slots are generated in NY Time
        // e.g., "2026-03-08T14:00:00-04:00" if daylight savings
        const dateStr = format(selectedDate, "yyyy-MM-dd");
        let generatedSlots: Date[] = [];

        // Weekday 2 PM - 3 PM NY time (14:00 - 15:00)
        for (let min = 0; min < 60; min += 15) {
            const timeString = `${dateStr}T14:${min === 0 ? "00" : min}:00`;
            // We parse the local time string as NY time
            // But we just need a valid ISO string representing that NY moment.
            // So we'll construct an ISO string in NY timezone, then get the universal Date object.
            // This approach ensures we are comparing apples to apples.

            // Using date-fns-tz to safely create the Date object representing this NY time.
            const nyDateStr = `${dateStr} ${14}:${min.toString().padStart(2, '0')}:00`;
            // Because JS dates are tricky, simpler approach:
            // We know the hours. Let's just create formatting objects.

            // Actually, the easiest way is to use the `date-fns-tz` to generate a zoned time.
            // However, we can simply generate standardized ISO strings for comparison.

            // NY Time Offset can be dynamic. Let's create a date object for the 2PM slot and convert back and forth.
        }

        // Simpler Approach Without Complex Object Manipulation:
        const baseDateString = format(selectedDate, "yyyy-MM-dd");

        const slots = [];

        // All Mon-Fri have 2:00 PM - 3:00 PM NY Time slots
        slots.push(
            `${baseDateString}T14:00:00`,
            `${baseDateString}T14:15:00`,
            `${baseDateString}T14:30:00`,
            `${baseDateString}T14:45:00`
        );

        // Mon & Wed add 5:00 PM - 6:00 PM NY Time slots
        if (isMon || isWed) {
            slots.push(
                `${baseDateString}T17:00:00`,
                `${baseDateString}T17:15:00`,
                `${baseDateString}T17:30:00`,
                `${baseDateString}T17:45:00`
            );
        }

        return slots;
    };

    const getDaySlots = date ? getAvailableSlots(date) : [];

    // Disable past dates, weekends, and dates beyond 2 weeks
    const disabledDays = (day: Date) => {
        return (
            isBefore(startOfDay(day), startOfDay(today)) ||
            isAfter(startOfDay(day), startOfDay(maxDate)) ||
            isWeekend(day)
        );
    };

    // Format slot for display (e.g. 2:00 PM)
    const formatSlotTime = (slotISOString: string) => {
        // The slotISOString is something like "2026-03-09T14:00:00". 
        // We know it represents NY time.
        const timePart = slotISOString.split("T")[1];
        const hours = parseInt(timePart.split(":")[0]);
        const minutes = timePart.split(":")[1];

        const ampm = hours >= 12 ? 'PM' : 'AM';
        const displayHours = hours > 12 ? hours - 12 : hours;

        return `${displayHours}:${minutes} ${ampm} EST`;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedSlot || !email) return;

        setIsSubmitting(true);
        setError("");

        try {
            const res = await fetch("/api/schedule", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, timeSlot: selectedSlot }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || "Failed to book slot");
            }

            setSuccess(true);
        } catch (err: any) {
            setError(err.message || "An error occurred");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 px-6 py-6 text-base font-medium transition-all shadow-sm">
                    Schedule a meeting with Us
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-0 overflow-hidden">
                {success ? (
                    <div className="p-12 text-center space-y-4">
                        <div className="mx-auto w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <DialogTitle className="text-2xl font-semibold text-neutral-900 dark:text-white">Meeting Scheduled</DialogTitle>
                        <DialogDescription className="text-base text-neutral-500 dark:text-neutral-400">
                            We've successfully booked your time slot. You'll receive a calendar invite shortly.
                        </DialogDescription>
                        <Button onClick={() => setIsOpen(false)} className="mt-8 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200">
                            Close
                        </Button>
                    </div>
                ) : (
                    <div className="flex flex-col md:flex-row h-full min-h-[500px]">
                        {/* Left side - Calendar */}
                        <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20">
                            <div className="mb-6 space-y-2">
                                <DialogTitle className="text-xl font-semibold text-neutral-900 dark:text-white">
                                    Talk to us
                                </DialogTitle>
                                <DialogDescription className="text-neutral-500 dark:text-neutral-400">
                                    Select a date to view our availability. <br />All times are shown in New York Time.
                                </DialogDescription>
                            </div>
                            <div className="flex justify-center bg-white dark:bg-neutral-950 rounded-lg p-3 border border-neutral-200 dark:border-neutral-800 shadow-sm">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={(d) => {
                                        setDate(d);
                                        setSelectedSlot(null);
                                    }}
                                    disabled={disabledDays}
                                    className="rounded-md"
                                />
                            </div>
                        </div>

                        {/* Right side - Time Slots & Form */}
                        <div className="flex-1 p-6 bg-white dark:bg-neutral-950 flex flex-col">
                            {!date ? (
                                <div className="h-full flex items-center justify-center text-neutral-400 dark:text-neutral-500 text-sm">
                                    Select a date on the left to see available times.
                                </div>
                            ) : (
                                <div className="h-full flex flex-col space-y-6">
                                    <div>
                                        <h3 className="font-medium text-neutral-900 dark:text-white mb-4">
                                            {format(date, "EEEE, MMMM d")}
                                        </h3>

                                        {isLoadingSlots ? (
                                            <div className="text-sm text-neutral-500 loading-pulse">Checking availability...</div>
                                        ) : (
                                            <div className="grid grid-cols-2 gap-2">
                                                {getDaySlots.map((slot) => {
                                                    const slotTime = new Date(slot).getTime();
                                                    const isBooked = bookedSlots.some(bSlot => {
                                                        const bTime = new Date(bSlot).getTime();
                                                        return !isNaN(bTime) && bTime === slotTime;
                                                    });
                                                    const isSelected = selectedSlot === slot;

                                                    return (
                                                        <Button
                                                            key={slot}
                                                            disabled={isBooked}
                                                            variant={isSelected ? "default" : "outline"}
                                                            onClick={() => setSelectedSlot(slot)}
                                                            className={`
                                w-full justify-center transition-all
                                ${isSelected ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-md" : ""}
                                ${isBooked ? "opacity-50 cursor-not-allowed line-through" : ""}
                                `}
                                                        >
                                                            {formatSlotTime(slot)}
                                                        </Button>
                                                    );
                                                })}
                                            </div>
                                        )}

                                    </div>

                                    {selectedSlot && (
                                        <div className="mt-auto animate-in slide-in-from-bottom-2 fade-in duration-200">
                                            <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                                                <div className="space-y-2">
                                                    <Label htmlFor="email" className="text-neutral-700 dark:text-neutral-300">
                                                        Email Address <span className="text-red-500">*</span>
                                                    </Label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        required
                                                        placeholder="you@example.com"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
                                                    />
                                                </div>
                                                {error && <p className="text-sm text-red-500">{error}</p>}
                                                <Button
                                                    type="submit"
                                                    disabled={isSubmitting || !email}
                                                    className="w-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200"
                                                >
                                                    {isSubmitting ? "Confirming..." : "Confirm Booking"}
                                                </Button>
                                            </form>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
