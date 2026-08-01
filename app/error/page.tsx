"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Hammer, Sparkles } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

export default function ErrorPage() {
  return (
    <main className="min-h-screen w-full bg-[#080808] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.08)_0%,rgba(240,192,64,0.03)_40%,transparent_70%)] pointer-events-none" />

      <div className="max-w-2xl w-full text-center relative z-10 space-y-8">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.06)] text-[#F0C040] text-xs font-display uppercase tracking-[0.25em]"
        >
          <Hammer className="h-3.5 w-3.5" />
          Site Still Building
        </motion.div>

        {/* 404 Big Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2"
        >
          <h1 className="font-display text-7xl sm:text-9xl font-bold leading-none gradient-text-cream tracking-tight">
            404
          </h1>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#E1E0CC]">
            Under Construction
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#777] text-sm sm:text-base leading-relaxed max-w-md mx-auto"
        >
          This section is currently being crafted. Every pixel is being polished to bring you a seamless, immersive digital experience.
        </motion.p>

        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="pt-4 flex justify-center"
        >
          <Link href="/">
            <LiquidButton size="lg" className="gap-3 font-display text-sm text-[#E1E0CC]">
              <ArrowLeft className="h-4 w-4 text-[#C9A84C]" />
              Return to Home
              <Sparkles className="h-3.5 w-3.5 text-[#C9A84C]" />
            </LiquidButton>
          </Link>
        </motion.div>

        {/* Domain note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xs text-[#444] pt-8 font-display"
        >
          aio.engineer — Creative Technologist
        </motion.p>
      </div>
    </main>
  );
}
