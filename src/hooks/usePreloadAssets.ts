"use client";

import { useEffect } from "react";
import { moods, type MoodId } from "@/lib/moods";

export function usePreloadAssets(moodId: MoodId) {
  useEffect(() => {
    const mood = moods[moodId];
    if (!mood || !mood.avatar) return; // Skip if no avatar assets

    // Preload video files
    const linkWebm = document.createElement("link");
    linkWebm.rel = "preload";
    linkWebm.as = "video";
    linkWebm.href = mood.avatar.video.webm;
    document.head.appendChild(linkWebm);

    const linkMp4 = document.createElement("link");
    linkMp4.rel = "preload";
    linkMp4.as = "video";
    linkMp4.href = mood.avatar.video.mp4;
    document.head.appendChild(linkMp4);

    // Preload poster
    const linkPoster = document.createElement("link");
    linkPoster.rel = "preload";
    linkPoster.as = "image";
    linkPoster.href = mood.avatar.poster;
    document.head.appendChild(linkPoster);

    return () => {
      document.head.removeChild(linkWebm);
      document.head.removeChild(linkMp4);
      document.head.removeChild(linkPoster);
    };
  }, [moodId]);
}
