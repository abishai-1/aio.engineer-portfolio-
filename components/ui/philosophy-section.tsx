"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GlowyWavesCanvas } from "@/components/ui/glowy-waves-hero-shadcnui";

export function PhilosophySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="philosophy" className="relative py-32 md:py-48 bg-[#0a0a0a] overflow-hidden">
      {/* Interactive Glowy Waves Canvas Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        <GlowyWavesCanvas
          waveColors={[
            "rgba(201, 168, 76, 0.65)",
            "rgba(240, 192, 64, 0.45)",
            "rgba(225, 224, 204, 0.3)",
            "rgba(160, 130, 50, 0.2)",
            "rgba(201, 168, 76, 0.15)",
          ]}
        />
      </div>

      {/* Background ambient glow radial orb */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div
          className="orb-animate w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.09) 0%, rgba(240,192,64,0.04) 40%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center relative z-10" ref={ref}>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-xs uppercase tracking-[0.3em] text-[#3a3a3a] mb-12"
        >
          04 — My Philosophy
        </motion.p>

        {/* Large quote mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[8rem] md:text-[12rem] leading-none text-[rgba(201,168,76,0.1)] select-none mb-[-2rem] md:mb-[-3rem]"
          aria-hidden
        >
          &ldquo;
        </motion.div>

        {/* Primary quote */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-5xl xl:text-6xl font-bold leading-tight gradient-text-cream mb-8"
        >
          Design should feel effortless.
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#666] text-base md:text-xl leading-relaxed max-w-3xl mx-auto mb-6"
        >
          Every project begins with understanding the story behind it. Whether it&apos;s a website,
          a product animation, a brand identity, or a cinematic scene, my goal is to create work
          that feels{" "}
          <span className="text-[#E1E0CC]">intentional, memorable, and meaningful</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#444] text-sm md:text-base italic"
        >
          I don&apos;t just make things look good — I design experiences that communicate, inspire,
          and leave a lasting impression.
        </motion.p>
      </div>
    </section>
  );
}
