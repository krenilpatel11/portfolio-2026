"use client";

import { BentoTile } from "../BentoTile";
import { GraduationCap, Calendar } from "lucide-react";

export function EducationTile({ delay = 0 }: { delay?: number }) {
  return (
    <BentoTile delay={delay} className="hover:shadow-lg hover:shadow-purple-500/10">
      <div className="flex items-start gap-3">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
          style={{
            background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
          }}
        >
          <GraduationCap className="w-6 h-6 text-white" strokeWidth={2.5} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Education</h3>
          <div className="space-y-2">
            <div>
              <p className="text-base font-bold text-[var(--foreground)]">B.Tech CSE (AI)</p>
              <p className="text-sm text-[var(--muted)]">Parul University</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
              <Calendar className="w-3.5 h-3.5" />
              <span>2019 - 2023</span>
            </div>
            <div className="mt-3 pt-3 border-t border-[var(--border)]">
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  Artificial Intelligence
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  Machine Learning
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BentoTile>
  );
}
