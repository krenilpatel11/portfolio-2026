"use client";
import { getCalApi } from "@calcom/embed-react";

let calInitialized = false;

export async function initCal() {
  if (calInitialized) return;
  
  try {
    const cal = await getCalApi({ namespace: "30min" });
    cal("ui", { 
      hideEventTypeDetails: false, 
      layout: "month_view"
    });
    calInitialized = true;
  } catch (error) {
    console.warn("Cal.com already initialized:", error);
  }
}

export async function openCalModal() {
  await initCal();
  const cal = await getCalApi({ namespace: "30min" });
  cal("modal", {
    calLink: "krenil-patel-0050/30min",
    config: {
      layout: "month_view",
      theme: "dark"
    }
  });
}
