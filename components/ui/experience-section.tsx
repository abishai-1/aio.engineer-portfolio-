"use client";

import { motion, useInView } from "framer-motion";
import { Clapperboard, Lightbulb, Atom, Sparkles, Flame } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { GlowingShadow } from "@/components/ui/glowing-shadow";

// Top row: 4 cards (Yesdas 1st, Entrepreneur Cell 2nd, Forge Founders 3rd, Quantum Club 4th)
const topRowExperiences = [
  {
    icon: Clapperboard,
    company: "Yesdas Production House",
    role: "3D Environment & VFX Artist",
    badge: "Feature Film",
    badgeColor: "bg-[rgba(201,168,76,0.18)] text-[#F5D565] border-[rgba(201,168,76,0.38)] shadow-[0_0_12px_rgba(201,168,76,0.2)]",
    description:
      "Contributed to the upcoming feature film Greyborn, sculpting cinematic 3D environments, background worlds, and animation sequences using Blender.",
    tags: ["Blender", "3D Environments", "Animation", "VFX"],
    brighter: true,
  },
  {
    icon: Lightbulb,
    company: "Entrepreneur Cell",
    role: "Design Lead",
    badge: "Creative Direction",
    badgeColor: "bg-[rgba(201,168,76,0.08)] text-[#C9A84C] border-[rgba(201,168,76,0.2)]",
    description:
      "Spearheaded brand identities, promotional design systems, interactive web visuals, and event campaigns for flagship tech and startup initiatives.",
    tags: ["Brand Identity", "Event Design", "Campaigns", "UI/UX"],
  },
  {
    icon: Flame,
    company: "Forge Founder",
    role: "Design Lead",
    badge: "Marketing Design",
    badgeColor: "bg-[rgba(201,168,76,0.12)] text-[#E1E0CC] border-[rgba(201,168,76,0.25)]",
    description:
      "Led the visual design for Forge Founder by creating branding assets, promotional graphics, social media creatives, event materials, and marketing visuals while maintaining a consistent and professional brand identity.",
    tags: ["Branding", "Graphic Design", "Social Media"],
  },
  {
    icon: Atom,
    company: "Quantum Club",
    role: "Design Lead",
    badge: "Brand Identity",
    badgeColor: "bg-[rgba(201,168,76,0.08)] text-[#C9A84C] border-[rgba(201,168,76,0.2)]",
    description:
      "Directed visual branding, motion media assets, and digital design guides across technical workshops, hackathons, and student publications.",
    tags: ["Visual Identity", "Motion Graphics", "Digital Assets", "Figma"],
  },
];

// Row 2: Middle centered card (2 cards wide, half height)
const freelanceExperience = {
  icon: Sparkles,
  company: "Independent Client Work",
  role: "Creative Technologist",
  badge: "Freelance",
  badgeColor: "bg-[rgba(201,168,76,0.08)] text-[#C9A84C] border-[rgba(201,168,76,0.2)]",
  description:
    "Crafting bespoke digital web experiences, 3D product visualizations, motion graphics, and visual effects for global brands and creative agencies.",
  tags: ["Web Dev", "3D Motion", "Unreal Engine", "VFX"],
};

const stats = [
  { target: 50, suffix: "+", isInfinity: false, label: "Projects Completed", sub: "Across web, 3D & design" },
  { target: 4, suffix: "", isInfinity: false, label: "Leadership & Core Roles", sub: "Yesdas, E-Cell, Forge, Quantum" },
  { target: 1, suffix: "", isInfinity: false, label: "Feature Film", sub: "Greyborn — in production" },
  { target: 0, suffix: "", isInfinity: true, label: "Coffee Consumed", sub: "Fuelling every all-nighter ☕" },
];

/* ── Number Counter Component ─────────────────────── */
function AnimatedCounter({
  target,
  suffix = "",
  trigger,
  delay = 0,
}: {
  target: number;
  suffix?: string;
  trigger: boolean;
  delay?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTime: number | null = null;
    let animationFrameId: number;
    const duration = 2000; // 2 seconds count up duration

    const timer = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * target));

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    }, delay * 1000);

    return () => {
      clearTimeout(timer);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [trigger, target, delay]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-28 md:py-36 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 md:px-10" ref={ref}>
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-xs uppercase tracking-[0.3em] text-[#3a3a3a] mb-4"
        >
          03 — Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-5xl font-bold gradient-text-cream leading-tight mb-16"
        >
          Where I&apos;ve contributed.
        </motion.h2>

        {/* ── Row 1: 4 Cards in the Same Row (Yesdas 1st, Entrepreneur Cell 2nd, Forge 3rd, Quantum 4th) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch mb-6">
          {topRowExperiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full"
              >
                <GlowingShadow className="h-full">
                  <div className="flex flex-col justify-between h-full w-full">
                    {/* Top Content */}
                    <div>
                      {/* Icon + Badge */}
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border ${
                            exp.brighter
                              ? "bg-[rgba(201,168,76,0.18)] border-[rgba(201,168,76,0.35)] shadow-[0_0_12px_rgba(201,168,76,0.25)]"
                              : "bg-[rgba(201,168,76,0.1)] border-[rgba(201,168,76,0.2)]"
                          }`}
                        >
                          <Icon className={`h-5 w-5 ${exp.brighter ? "text-[#F5D565]" : "text-[#C9A84C]"}`} strokeWidth={1.5} />
                        </div>
                        <span
                          className={`text-[10px] uppercase tracking-wider font-display border rounded-full px-2.5 py-0.5 ${exp.badgeColor}`}
                        >
                          {exp.badge}
                        </span>
                      </div>

                      {/* Company + Role */}
                      <h3 className="font-display text-[#E1E0CC] text-base font-bold leading-snug mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-[#888] text-xs font-medium mb-3 leading-snug">{exp.role}</p>

                      {/* Description */}
                      <p className="text-[#666] text-xs leading-relaxed mb-4">{exp.description}</p>
                    </div>

                    {/* Bottom Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[rgba(255,255,255,0.06)]">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] px-2 py-0.5 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] text-[#666]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlowingShadow>
              </motion.div>
            );
          })}
        </div>

        {/* ── Row 2: Independent Client Work (Centered, 2 cards wide, half height, compact glow) ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-3xl mx-auto w-full"
        >
          <GlowingShadow compact className="w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full p-1 sm:p-2">
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)] shrink-0">
                    <Sparkles className="h-4 w-4 text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-[#E1E0CC] text-base font-bold leading-snug">
                        {freelanceExperience.company}
                      </h3>
                      <span className="text-[9px] uppercase tracking-wider font-display border rounded-full px-2 py-0.5 bg-[rgba(201,168,76,0.08)] text-[#C9A84C] border-[rgba(201,168,76,0.2)]">
                        {freelanceExperience.badge}
                      </span>
                    </div>
                    <p className="text-[#888] text-xs font-medium">{freelanceExperience.role}</p>
                  </div>
                </div>
                <p className="text-[#666] text-xs leading-relaxed pt-1">{freelanceExperience.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 shrink-0 self-start md:self-center pt-2 md:pt-0 md:pl-4 border-t md:border-t-0 md:border-l border-[rgba(255,255,255,0.06)]">
                {freelanceExperience.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] px-2 py-0.5 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] text-[#666]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </GlowingShadow>
        </motion.div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="section-divider my-16 origin-left"
        />

        {/* Stats Grid right below the experience cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.5 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col gap-2"
            >
              <span
                className="font-display font-bold leading-none gradient-text-accent flex items-center h-[1.1em]"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
              >
                {stat.isInfinity ? (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.6 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    ∞
                  </motion.span>
                ) : (
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    trigger={isInView}
                    delay={0.5 + i * 0.1}
                  />
                )}
              </span>
              <span className="text-[#E1E0CC] text-sm md:text-base font-semibold font-display leading-snug">
                {stat.label}
              </span>
              <span className="text-[#444] text-xs md:text-sm leading-relaxed">{stat.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
