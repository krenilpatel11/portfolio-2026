"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, ArrowUpRight } from "lucide-react";
import { FiMail, FiExternalLink, FiLinkedin, FiGithub } from "react-icons/fi";
import { SiBehance } from "react-icons/si";
import type { IconType } from "react-icons";
import { useMood } from "@/context/MoodContext";
import { PatternBackground } from "@/components/patterns/PatternBackground";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.enum(["Web Development", "AI / Cloud Solutions", "UI/UX Design", "Graphic Design", "Other"]),
  message: z.string().min(20, "Message must be at least 20 characters"),
});
type FormData = z.infer<typeof schema>;

interface DirectLink {
  label: string;
  value: string;
  href: string;
  icon: IconType;
}

const directLinks: DirectLink[] = [
  { label: "Email",    value: "patelkrenil150@gmail.com",        href: "mailto:patelkrenil150@gmail.com",       icon: FiMail },
  { label: "GitHub",   value: "github.com/krenilpatel11",         href: "https://github.com/krenilpatel11",       icon: FiGithub },
  { label: "LinkedIn", value: "linkedin.com/in/krenilpatel",      href: "https://linkedin.com/in/krenilpatel",    icon: FiLinkedin },
  { label: "Agency",   value: "labelflow.store",                  href: "https://labelflow.store/",              icon: FiExternalLink },
  { label: "Behance",  value: "behance.net/krenilpatel2",         href: "https://www.behance.net/krenilpatel2",  icon: SiBehance },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { currentMood } = useMood();
  const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-36 border-t border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10" ref={ref}>

        {/* Two-panel layout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: easing }}
          className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-[var(--border)] mb-0"
        >
          {/* LEFT panel — accent color with pattern */}
          <div 
            className="relative text-white p-10 md:p-14 flex flex-col justify-between min-h-[480px] overflow-hidden transition-colors duration-700"
            style={{ backgroundColor: currentMood.accentHex }}
          >
            {/* Pattern overlay */}
            <PatternBackground pattern="circuit" opacity={0.08} />
            
            {/* Content */}
            <div className="relative z-10">
              {/* Available badge */}
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open for projects
              </span>

              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold font-display leading-[1.05] mb-6 text-white">
                Let&apos;s<br />Collaborate
              </h2>

              <p className="text-sm text-white/70 uppercase tracking-widest mb-2">Drop us a line</p>
              <a
                href="mailto:patelkrenil150@gmail.com"
                className="text-base font-semibold underline underline-offset-4 text-white/90 hover:text-white transition-opacity"
              >
                patelkrenil150@gmail.com
              </a>
            </div>

            {/* Arrow button at bottom */}
            <div className="mt-10 relative z-10">
              <a
                href="mailto:patelkrenil150@gmail.com"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/30 hover:border-white text-white hover:scale-110 transition-all"
                aria-label="Email Krenil"
              >
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>

          {/* RIGHT panel — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: easing }}
            className="bg-[var(--card-bg)] p-10 md:p-14"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-16">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <CheckCircle2 size={56} className="text-[var(--accent)]" />
                </motion.div>
                <h3 className="text-xl font-bold text-[var(--foreground)]">Message Sent!</h3>
                <p className="text-[var(--muted)] text-sm">
                  Thanks! I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm text-[var(--accent)] hover:underline mt-2"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 h-full flex flex-col justify-between">
                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] block mb-1.5">
                      Name
                    </label>
                    <input
                      {...register("name")}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-sm placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] block mb-1.5">
                      Email
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-sm placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] block mb-1.5">
                      Subject
                    </label>
                    <select
                      {...register("subject")}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                    >
                      <option value="">Select a topic</option>
                      <option>Web Development</option>
                      <option>AI / Cloud Solutions</option>
                      <option>UI/UX Design</option>
                      <option>Graphic Design</option>
                      <option>Other</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] block mb-1.5">
                      Message
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-sm placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-500">
                      Something went wrong. Please try again or email directly.
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[var(--foreground)] text-[var(--background)] font-semibold py-4 rounded-xl hover:opacity-80 transition-opacity disabled:opacity-50 text-sm mt-4"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <ArrowUpRight size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>

        {/* Horizontal strip of direct links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: easing }}
          className="mt-0 border-t border-[var(--border)]"
        >
          {directLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between group border-b border-[var(--border)] py-4 hover:border-[var(--accent)] transition-colors"
              >
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
                  <Icon size={13} />
                  {item.label}
                </span>
                <span className="text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-1.5">
                  {item.value}
                  <ArrowUpRight
                    size={13}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </span>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
