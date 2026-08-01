"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-32 md:py-44 bg-[#080808] overflow-hidden">
      {/* Ambient gold orbs */}
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-0 right-1/4 w-[400px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(240,192,64,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center relative z-10" ref={ref}>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-xs uppercase tracking-[0.3em] text-[#3a3a3a] mb-8"
        >
          05 — Get In Touch
        </motion.p>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(201,168,76,0.28)] bg-[rgba(201,168,76,0.06)] mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#C9A84C] opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C9A84C]" />
          </span>
          <MapPin className="h-3 w-3 text-[#C9A84C]" strokeWidth={2} />
          <span className="text-xs text-[#C9A84C] font-display tracking-wide">
            Available for freelance opportunities worldwide
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-6xl xl:text-7xl font-bold leading-tight gradient-text-cream mb-6"
        >
          Let&apos;s build something unforgettable.
        </motion.h2>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#555] text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-14"
        >
          Whether you need a website, a brand identity, a cinematic animation, or a complete digital
          experience — I&apos;d love to hear about your project.
        </motion.p>

        {/* CTA buttons — LiquidButton redirecting to /error */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          {/* Primary CTA — gold glow liquid glass */}
          <div className="relative">
            {/* Gold glow halo */}
            <div className="absolute inset-0 rounded-full blur-xl bg-[rgba(201,168,76,0.18)] scale-110 pointer-events-none" />
            <Link href="/error">
              <LiquidButton
                size="xl"
                className="text-[#F0C040] font-semibold font-display relative"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4 text-[#C9A84C]" />
              </LiquidButton>
            </Link>
          </div>

          {/* Secondary CTA */}
          <Link href="/error">
            <LiquidButton
              size="xl"
              className="text-[#888] font-display"
            >
              View My Work
            </LiquidButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
