"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "20+", label: "Projects Completed", sub: "Across web, 3D & design" },
  { value: "3", label: "Creative Leadership Roles", sub: "Yesdas, E-Cell, Quantum" },
  { value: "1", label: "Feature Film", sub: "Greyborn — in production" },
  { value: "∞", label: "Coffee Consumed", sub: "Fuelling every all-nighter ☕" },
];

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 md:px-10" ref={ref}>
        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="section-divider mb-16 origin-left"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col gap-2"
            >
              <span
                className="font-display font-bold leading-none gradient-text-accent"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
              >
                {stat.value}
              </span>
              <span className="text-[#E1E0CC] text-sm md:text-base font-semibold font-display leading-snug">
                {stat.label}
              </span>
              <span className="text-[#444] text-xs md:text-sm leading-relaxed">{stat.sub}</span>
            </motion.div>
          ))}
        </div>

        {/* Bottom divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="section-divider mt-16 origin-left"
        />
      </div>
    </section>
  );
}
