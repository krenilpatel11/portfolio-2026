"use client";
import { useEffect } from "react";
import { initCal, openCalModal } from "@/lib/cal-init";

interface CalBookingButtonProps {
  variant?: "navbar" | "primary" | "contact" | "card";
  className?: string;
  children?: React.ReactNode;
}

export default function CalBookingButton({ variant = "primary", className = "", children }: CalBookingButtonProps) {
  useEffect(() => {
    initCal();
  }, []);

  // Navbar variant - compact button
  if (variant === "navbar") {
    return (
      <button
        onClick={openCalModal}
        className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-[var(--border)] rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 ${className}`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {children || "Schedule Call"}
      </button>
    );
  }

  // Primary CTA variant - larger button
  if (variant === "primary") {
    return (
      <button
        onClick={openCalModal}
        className={`inline-flex items-center gap-2 px-6 py-3 text-base font-semibold bg-[var(--accent)] text-white rounded-lg hover:opacity-90 transition-opacity duration-300 ${className}`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {children || "Book a 30-Min Call"}
      </button>
    );
  }

  // Contact variant - full width white button (for Contact section)
  if (variant === "contact") {
    return (
      <button
        onClick={openCalModal}
        className={`w-full inline-flex items-center justify-center gap-3 px-8 py-5 text-base font-bold bg-white dark:bg-white text-gray-900 dark:text-gray-900 rounded-2xl hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)] transition-all duration-300 group ${className}`}
      >
        <svg className="w-6 h-6 group-hover:scale-110 transition-transform text-gray-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-gray-900">{children || "Book a 30-Min Call"}</span>
        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform text-gray-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    );
  }

  // Card variant - full width with icon
  return (
    <button
      onClick={openCalModal}
      className={`w-full inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-semibold bg-[var(--accent)] text-white rounded-lg hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.4)] transition-all duration-300 group ${className}`}
    >
      <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      {children || "Schedule a Meeting"}
      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </button>
  );
}
