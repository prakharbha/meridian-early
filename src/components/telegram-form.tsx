"use client";

import { useState, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { ChevronRight } from "lucide-react";
import { SchedulingModal } from "@/components/scheduling-modal";

interface WaitlistFormData {
  email: string;
  turnstileToken: string;
}

async function submitWaitlist(data: WaitlistFormData) {
  const response = await fetch("/api/waitlist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to submit");
  }
  return response.json();
}

interface TelegramFormProps {
  turnstileSiteKey?: string;
}

export function TelegramForm({ turnstileSiteKey }: TelegramFormProps) {
  const [email, setEmail] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [formError, setFormError] = useState("");
  const turnstileRef = useRef<TurnstileInstance>(null);

  const siteKey = turnstileSiteKey || process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY || "";

  const mutation = useMutation({
    mutationFn: submitWaitlist,
    onSuccess: () => {
      setEmail("");
      setTurnstileToken("");
      setFormError("");
      turnstileRef.current?.reset();
    },
    onError: (error: Error) => {
      setFormError(error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    if (!email) { setFormError("Email is required"); return; }
    if (!turnstileToken) { setFormError("Please complete the security check"); return; }
    mutation.mutate({ email, turnstileToken });
  };

  if (mutation.isSuccess) {
    return (
      <div className="space-y-8 w-full">
        <div className="text-center space-y-3 py-8">
          <div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(245,158,11,.2)" }}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#f59e0b">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-xl font-semibold">You&apos;re on the list</p>
          <p style={{ color: "#cbd5e1" }}>We&apos;ll be in touch when we launch.</p>
        </div>
        <div className="text-center">
          <p className="text-sm mb-4" style={{ color: "#cbd5e1" }}>Unsure if Meridian is the right fit?</p>
          <SchedulingModal triggerLabel="Schedule a Meeting" triggerClassName="secondary-button" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="you@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 h-9 min-w-0 rounded-md border px-3 py-1 text-base outline-none transition-all md:text-sm"
            style={{
              backgroundColor: "#0f1419",
              borderColor: "#334155",
              color: "#f5f3ff",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#f59e0b")}
            onBlur={(e) => (e.target.style.borderColor = "#334155")}
          />
          <button
            type="submit"
            disabled={mutation.isPending}
            className="inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md px-6 py-3 text-sm font-semibold transition-all disabled:opacity-50"
            style={{ backgroundColor: "#f59e0b", color: "#0f1419" }}
          >
            {mutation.isPending ? "Submitting..." : "Request Access"}
            {!mutation.isPending && <ChevronRight className="w-4 h-4 ml-1" />}
          </button>
        </div>

        {formError && <p className="text-sm" style={{ color: "#ef4444" }}>{formError}</p>}

        <div className="flex justify-center scale-75 origin-left h-12 overflow-hidden -my-1">
          {siteKey ? (
            <Turnstile
              ref={turnstileRef}
              siteKey={siteKey}
              onSuccess={setTurnstileToken}
              onError={() => setFormError("Security check failed. Please try again.")}
              onExpire={() => setTurnstileToken("")}
              options={{ theme: "dark", size: "compact" }}
            />
          ) : (
            <p className="text-xs" style={{ color: "#ef4444" }}>Security check unavailable</p>
          )}
        </div>
      </form>

      <div className="text-center">
        <p className="text-sm mb-4" style={{ color: "#cbd5e1" }}>Unsure if Meridian is the right fit?</p>
        <SchedulingModal triggerLabel="Schedule a Meeting" triggerClassName="secondary-button" />
      </div>
    </div>
  );
}
