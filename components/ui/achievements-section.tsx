"use client";

import { motion, useInView } from "framer-motion";
import { Trophy, Medal, Rocket, Lightbulb, Award, Users, type LucideIcon } from "lucide-react";
import { useRef } from "react";
import { GlowingShadow } from "@/components/ui/glowing-shadow";

interface Achievement {
  index: string;
  title: string;
  result: string;
  subResult?: string;
  description?: string;
  bullets: string[];
  icon: LucideIcon;
  featured?: boolean;
}

const achievements: Achievement[] = [
  {
    index: "01",
    title: "IEEE Xtreme 20.0",
    result: "1st in India",
    subResult: "51st Globally",
    description:
      "An international 24-hour programming competition organized by IEEE, bringing together student teams from around the world to solve challenging computational problems.",
    bullets: [
      "Secured 1st position in India on the live leaderboard.",
      "Achieved 51st position globally on the live leaderboard.",
      "Competed in an intense, time-bound competitive programming environment.",
    ],
    icon: Trophy,
    featured: true,
  },
  {
    index: "02",
    title: "AWS Student Community Day Vizag 2026",
    result: "2nd Place",
    description:
      "Participated in a hackathon organized as part of AWS Student Community Day Vizag, collaborating with a team to develop a technology-driven solution under competitive conditions.",
    bullets: [
      "Secured 2nd place in the hackathon.",
      "Demonstrated problem-solving, technical execution and teamwork.",
    ],
    icon: Medal,
  },
  {
    index: "03",
    title: "National Entrepreneurship Challenge — IIT Bombay",
    result: "44th Place",
    description:
      "Participated in IIT Bombay's National Entrepreneurship Challenge (NEC), a nationwide competition designed to evaluate entrepreneurial thinking, innovation, business development and execution among college teams.",
    bullets: [
      "Secured 44th place among participants from 4,000+ colleges.",
      "Competed in a national-level entrepreneurship challenge.",
      "Demonstrated entrepreneurial thinking, team coordination and organizational capabilities.",
    ],
    icon: Rocket,
  },
  {
    index: "04",
    title: "Smart India Hackathon 2026",
    result: "Internal Round Qualified",
    description:
      "Qualified through the internal selection round for India's national innovation hackathon, organized to encourage students to develop technology-driven solutions for real-world problems.",
    bullets: [
      "Participated as part of Team Horcurx.",
      "Selected for Problem Statement 26013.",
      "Challenge: AI-Enabled Geospatial Data Harmonization for Urban Land Records.",
      "Worked on a solution addressing geospatial data integration and urban land-record management.",
    ],
    icon: Lightbulb,
  },
  {
    index: "05",
    title: "Project Expo",
    result: "3rd Prize",
    description:
      "Recognized at a project exhibition for developing and presenting an engineering project.",
    bullets: [
      "Secured 3rd prize.",
      "Demonstrated technical implementation, project development and presentation skills.",
    ],
    icon: Award,
  },
  {
    index: "06",
    title: "AISYWLC 2026 — CHRIST University, Bengaluru",
    result: "Delegate",
    bullets: [
      "Represented Vizag Bay Section.",
      "Represented Raghu Engineering College.",
      "Attended the event at CHRIST University's Yeshwanthpur campus.",
    ],
    icon: Users,
  },
];

export function AchievementsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="py-28 md:py-36 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 md:px-10" ref={ref}>
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-xs uppercase tracking-[0.3em] text-[#3a3a3a] mb-4"
        >
          04 — Achievements
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-5xl font-bold gradient-text-cream leading-tight mb-16"
        >
          Recognition along the way.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <GlowingShadow className="h-full">
                  <div className="flex flex-col h-full w-full">
                    {/* Index + Icon */}
                    <div className="flex items-start justify-between mb-5">
                      <span className="font-display text-xs tracking-[0.25em] text-[#555]">
                        {item.index}
                      </span>
                      <div
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border ${
                          item.featured
                            ? "bg-[rgba(201,168,76,0.18)] border-[rgba(201,168,76,0.35)] shadow-[0_0_12px_rgba(201,168,76,0.25)]"
                            : "bg-[rgba(201,168,76,0.1)] border-[rgba(201,168,76,0.2)]"
                        }`}
                      >
                        <Icon
                          className={`h-5 w-5 ${item.featured ? "text-[#F5D565]" : "text-[#C9A84C]"}`}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* Result */}
                    <p
                      className="font-display font-bold leading-tight gradient-text-accent"
                      style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
                    >
                      {item.result}
                    </p>
                    {item.subResult && (
                      <p className="font-display text-sm font-semibold text-[#C9A84C] mt-1">
                        {item.subResult}
                      </p>
                    )}

                    {/* Title */}
                    <h3 className="font-display text-[#E1E0CC] text-base font-bold leading-snug mt-4 mb-2">
                      {item.title}
                    </h3>

                    {item.description && (
                      <p className="text-[#666] text-xs leading-relaxed mb-4">{item.description}</p>
                    )}

                    {/* Bullets */}
                    <ul className="space-y-2 pt-3 mt-auto border-t border-[rgba(255,255,255,0.06)]">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="text-[#C9A84C] text-sm leading-none mt-0.5">→</span>
                          <span className="text-[#888] text-xs leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlowingShadow>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
