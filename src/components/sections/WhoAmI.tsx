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
import { PatternBackground } from "../patterns/PatternBackground";

export default function WhoAmI() {
  const { currentMood } = useMood();
  
  return (
    <section
      id="about"
      className="relative py-24 md:py-36 bg-[var(--background)] overflow-hidden scroll-mt-0"
    >
      {/* Pattern background - more visible */}
      <PatternBackground pattern="geometric" opacity={0.05} />
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section header - mood-reactive */}
        <div className="mb-16 text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentMood.id + "-label"}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-3"
            >
              {currentMood.variants.aboutSectionTitle}
            </motion.p>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentMood.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight text-[var(--foreground)] font-display mb-8"
            >
              {currentMood.variants.aboutSectionSubtitle}
            </motion.h2>
          </AnimatePresence>
          
          {/* Expanded description area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentMood.id}-desc-container`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto mb-4"
            >
              <p className="text-base leading-relaxed text-[var(--muted)]">
                {currentMood.variants.aboutIntro}
              </p>
            </motion.div>
          </AnimatePresence>
          
          {/* Main description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentMood.id}-main-desc`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-lg leading-relaxed text-[var(--foreground)] mb-4">
                {currentMood.variants.description}
              </p>
              <p className="text-base leading-relaxed text-[var(--muted)]">
                {currentMood.variants.tagline}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bento Grid - improved spacing and alignment */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[180px]">
          {/* Row 1-3: Avatar Hero (8 cols, 3 rows) + Experience (4 cols, 1 row) */}
          <div className="col-span-12 md:col-span-8 row-span-3 h-full">
            <AvatarHeroTile />
          </div>
          <div className="col-span-12 md:col-span-4 row-span-1 h-full">
            <ExperienceTile delay={0.1} />
          </div>

          {/* Row 2-3: Projects (4 cols, 2 rows) */}
          <div className="col-span-12 md:col-span-4 row-span-2 h-full">
            <ProjectsTile delay={0.15} />
          </div>

          {/* Row 4: Certifications, Currently, Brands (4 cols each) */}
          <div className="col-span-12 md:col-span-4 row-span-1 h-full">
            <CertificationsTile delay={0.2} />
          </div>
          <div className="col-span-12 md:col-span-4 row-span-1 h-full">
            <CurrentlyTile delay={0.25} />
          </div>
          <div className="col-span-12 md:col-span-4 row-span-1 h-full">
            <BrandsDesignedTile delay={0.3} />
          </div>

          {/* Row 5: Problem Solver, Based In, Quote (4, 4, 4 cols) */}
          <div className="col-span-12 md:col-span-4 row-span-1 h-full">
            <ProblemSolverTile delay={0.35} />
          </div>
          <div className="col-span-12 md:col-span-4 row-span-1 h-full">
            <BasedInTile delay={0.4} />
          </div>
          <div className="col-span-12 md:col-span-4 row-span-1 h-full">
            <QuoteTile delay={0.45} />
          </div>

          {/* Row 6: Founder, Education, Achievement (4 cols each) */}
          <div className="col-span-12 md:col-span-4 row-span-1 h-full">
            <FounderTile delay={0.5} />
          </div>
          <div className="col-span-12 md:col-span-4 row-span-1 h-full">
            <EducationTile delay={0.55} />
          </div>
          <div className="col-span-12 md:col-span-4 row-span-1 h-full">
            <AchievementTile delay={0.6} />
          </div>
        </div>
      </div>
    </section>
  );
}
