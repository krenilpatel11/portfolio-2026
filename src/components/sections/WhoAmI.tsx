"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMood } from "@/context/MoodContext";
import { AvatarHeroTile } from "../bento/AvatarHeroTile";
import { ExperienceTile } from "../bento/tiles/ExperienceTile";
import { ProjectsTile } from "../bento/tiles/ProjectsTile";
import { CertificationsTile } from "../bento/tiles/CertificationsTile";
import { CurrentlyTile } from "../bento/tiles/CurrentlyTile";
import { BrandsDesignedTile } from "../bento/tiles/BrandsDesignedTile";
import { ProblemSolverTile } from "../bento/tiles/ProblemSolverTile";
import { BasedInTile } from "../bento/tiles/BasedInTile";
import { QuoteTile } from "../bento/tiles/QuoteTile";
import { FounderTile } from "../bento/tiles/FounderTile";
import { EducationTile } from "../bento/tiles/EducationTile";
import { AchievementTile } from "../bento/tiles/AchievementTile";
import { MoodSwitcher } from "../interactive/MoodSwitcher";
import { PatternBackground } from "../patterns/PatternBackground";

export default function WhoAmI() {
  const { currentMood } = useMood();
  
  return (
    <section
      id="about"
      className="relative py-24 md:py-36 border-t border-[var(--border)] bg-[var(--background)] overflow-hidden"
    >
      {/* Pattern background - more visible */}
      <PatternBackground pattern="geometric" opacity={0.05} />
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section header - mood-reactive */}
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-3">
            About
          </p>
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentMood.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight text-[var(--foreground)] font-display mb-6"
            >
              The Many Facets
            </motion.h2>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={`${currentMood.id}-desc`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[var(--muted)] leading-relaxed max-w-2xl mx-auto mb-8"
            >
              {currentMood.variants.description}
            </motion.p>
          </AnimatePresence>
          
          {/* Mood Switcher */}
          <div className="flex justify-center">
            <MoodSwitcher />
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[180px]">
          {/* Row 1-3: Avatar Hero (8 cols, 3 rows) + Experience (4 cols, 1 row) */}
          <div className="col-span-12 md:col-span-8 row-span-3">
            <AvatarHeroTile />
          </div>
          <div className="col-span-12 md:col-span-4 row-span-1">
            <ExperienceTile delay={0.1} />
          </div>

          {/* Row 2-3: Projects (4 cols, 2 rows) */}
          <div className="col-span-12 md:col-span-4 row-span-2">
            <ProjectsTile delay={0.15} />
          </div>

          {/* Row 4: Certifications, Currently, Brands (4 cols each) */}
          <div className="col-span-12 md:col-span-4 row-span-1">
            <CertificationsTile delay={0.2} />
          </div>
          <div className="col-span-12 md:col-span-4 row-span-1">
            <CurrentlyTile delay={0.25} />
          </div>
          <div className="col-span-12 md:col-span-4 row-span-1">
            <BrandsDesignedTile delay={0.3} />
          </div>

          {/* Row 5: Problem Solver, Based In, Quote (4, 4, 8 cols) */}
          <div className="col-span-12 md:col-span-4 row-span-1">
            <ProblemSolverTile delay={0.35} />
          </div>
          <div className="col-span-12 md:col-span-4 row-span-1">
            <BasedInTile delay={0.4} />
          </div>
          <div className="col-span-12 md:col-span-4 row-span-2">
            <QuoteTile delay={0.45} />
          </div>

          {/* Row 6: Founder, Education, Achievement (4 cols each) */}
          <div className="col-span-12 md:col-span-4 row-span-1">
            <FounderTile delay={0.5} />
          </div>
          <div className="col-span-12 md:col-span-4 row-span-1">
            <EducationTile delay={0.55} />
          </div>
          <div className="col-span-12 md:col-span-4 row-span-1">
            <AchievementTile delay={0.6} />
          </div>
        </div>
      </div>
    </section>
  );
}
