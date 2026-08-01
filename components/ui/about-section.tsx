"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, Sparkles, Code2, Palette } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { ToolsMarquee } from "@/components/ui/tools-marquee";

// Import custom icons
import {
  PhotoshopIcon,
  IllustratorIcon,
  AfterEffectsIcon,
  PremiereProIcon,
  CanvaIcon,
  VSCodeIcon,
} from "@/components/ui/tool-icons";

// Import react-icons
import {
  SiBlender,
  SiUnrealengine,
  SiDavinciresolve,
  SiFigma,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiJson,
} from "react-icons/si";

// Tool data items — Row 1 (Creative & 3D)
const creativeTools = [
  { name: "Blender", icon: SiBlender, color: "#EA7600" },
  { name: "Unreal Engine 5", icon: SiUnrealengine, color: "#FFFFFF" },
  { name: "Photoshop", icon: PhotoshopIcon, color: "#31A8FF" },
  { name: "Illustrator", icon: IllustratorIcon, color: "#FF9A00" },
  { name: "After Effects", icon: AfterEffectsIcon, color: "#9999FF" },
  { name: "Premiere Pro", icon: PremiereProIcon, color: "#9999FF" },
  { name: "DaVinci Resolve", icon: SiDavinciresolve, color: "#E04836" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Canva", icon: CanvaIcon, color: "#00C4CC" },
];

// Tool data items — Row 2 (Code & Tech Stack)
const codeTools = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "VS Code", icon: VSCodeIcon, color: "#007ACC" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "JSON", icon: SiJson, color: "#C9A84C" },
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="py-28 md:py-36 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 md:px-10" ref={ref}>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-xs uppercase tracking-[0.3em] text-[#3a3a3a] mb-14"
        >
          01 — About Me
        </motion.p>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 xl:gap-24 items-start mb-20">
          {/* ── Left: Bio text ── */}
          <div className="lg:col-span-3 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl md:text-5xl xl:text-[3.5rem] font-bold leading-[1.05] gradient-text-cream"
            >
              Creativity meets technology.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#777] text-base md:text-lg leading-relaxed"
            >
              I&apos;m a multidisciplinary Creative Technologist who enjoys transforming ideas into
              immersive digital experiences. From designing modern websites and brand identities to
              creating cinematic 3D environments, motion graphics, and visual effects, I combine
              creativity with technology to build work that is both visually compelling and
              purposeful.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#777] text-base md:text-lg leading-relaxed"
            >
              Contributing to a feature film in production as a{" "}
              <span className="text-[#E1E0CC]">3D Environment, Background &amp; Animation Artist</span>
              , while serving as Design Lead at{" "}
              <a
                href="https://forgefounder.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E1E0CC] font-medium hover:text-[#C9A84C] hover:underline underline-offset-4 transition-colors"
              >
                Forge Founder
              </a>{" "}
              and leading creative direction for student organizations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#777] text-base md:text-lg leading-relaxed"
            >
              I believe great design isn&apos;t just about aesthetics — it&apos;s about creating{" "}
              <span className="text-[#E1E0CC] italic">experiences that people remember</span>.
            </motion.p>
          </div>

          {/* ── Right: Currently Status ── */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="p-7 rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[#0d0d0d] space-y-6">
              <p className="font-display text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-semibold">
                Currently
              </p>
              <div className="space-y-4">
                {/* 1st: Greyborn feature film */}
                <div className="flex items-start gap-3">
                  <span className="text-[#C9A84C] mt-0.5 text-lg leading-none">→</span>
                  <p className="text-[#888] text-sm leading-relaxed">
                    Contributing to{" "}
                    <span className="text-[#E1E0CC] font-medium">Greyborn</span> feature film as 3D
                    Environment &amp; Animation Artist
                  </p>
                </div>
                {/* 2nd: Forge Founder with link on hover */}
                <div className="flex items-start gap-3">
                  <span className="text-[#C9A84C] mt-0.5 text-lg leading-none">→</span>
                  <p className="text-[#888] text-sm leading-relaxed">
                    Design Lead at{" "}
                    <a
                      href="https://forgefounder.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E1E0CC] font-medium hover:text-[#C9A84C] hover:underline underline-offset-4 transition-colors"
                    >
                      Forge Founder
                    </a>
                  </p>
                </div>
                {/* 3rd: Freelance */}
                <div className="flex items-start gap-3">
                  <span className="text-[#C9A84C] mt-0.5 text-lg leading-none">→</span>
                  <p className="text-[#888] text-sm leading-relaxed">
                    Open for{" "}
                    <span className="text-[#E1E0CC] font-medium">freelance opportunities</span>{" "}
                    worldwide
                  </p>
                </div>
              </div>
            </div>

            <div className="p-7 rounded-2xl border border-[rgba(201,168,76,0.15)] bg-[rgba(201,168,76,0.03)] space-y-4">
              <div className="flex items-center justify-between">
                <p className="font-display text-xs uppercase tracking-[0.25em] text-[#E1E0CC] font-semibold">
                  Creative Stack
                </p>
                <Sparkles className="h-4 w-4 text-[#C9A84C]" />
              </div>
              <p className="text-[#777] text-xs leading-relaxed">
                Proficient in 22 industry-standard tools across 3D animation, real-time rendering,
                visual effects, design, and full-stack web development.
              </p>
              <LiquidButton
                size="sm"
                className="w-full text-xs font-display text-[#E1E0CC] gap-2 mt-2"
                onClick={() => setIsModalOpen(true)}
              >
                <Sparkles className="h-3.5 w-3.5 text-[#C9A84C]" />
                Explore Tools Matrix
              </LiquidButton>
            </div>
          </motion.div>
        </div>

        {/* ── Tools & Technologies Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="pt-12 border-t border-[rgba(255,255,255,0.07)]"
        >
          {/* Section Header with Liquid Glass Button Beside It */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <h3 className="font-display text-xl md:text-2xl font-bold gradient-text-cream">
                Tools &amp; Technologies
              </h3>
              <LiquidButton
                size="sm"
                className="text-xs font-display text-[#E1E0CC]"
                onClick={() => setIsModalOpen(true)}
              >
                <Sparkles className="h-3.5 w-3.5 text-[#C9A84C]" />
                Explore Matrix
              </LiquidButton>
            </div>

            <span className="text-xs text-[#555] px-3 py-1 rounded-full border border-[rgba(255,255,255,0.08)] bg-[#111] self-start sm:self-auto">
              22 Specialized Tools
            </span>
          </div>

          {/* Two 3-D perspective marquee rows — bleed past section padding */}
          <div className="-mx-6 md:-mx-10">
            <ToolsMarquee />
          </div>
        </motion.div>
      </div>

      {/* ── Liquid Glass Tools Matrix Overlay Modal ── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-3xl p-6 sm:p-8 border border-white/15 bg-[#0a0a0a]/90 backdrop-blur-2xl shadow-2xl shadow-black/80 max-h-[85vh] overflow-y-auto"
              style={{
                boxShadow: `
                  0 0 12px rgba(0,0,0,0.4),
                  inset 1px 1px 1px -0.5px rgba(255,255,255,0.4),
                  inset -1px -1px 1px -0.5px rgba(255,255,255,0.2),
                  0 0 40px rgba(201,168,76,0.12)
                `,
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.25)] flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-[#C9A84C]" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold gradient-text-cream">
                      Tools &amp; Technologies Matrix
                    </h3>
                    <p className="text-xs text-[#666]">
                      Comprehensive toolkit for 3D, animation, design &amp; engineering
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-[#888] hover:text-white transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Group 1: Creative & 3D */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Palette className="h-4 w-4 text-[#C9A84C]" />
                  <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-[#E1E0CC]">
                    Creative, 3D &amp; Motion Graphics
                  </h4>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {creativeTools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                      <div
                        key={tool.name}
                        className="flex items-center gap-3 p-3 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-[rgba(201,168,76,0.3)] hover:bg-white/[0.07] transition-all duration-200"
                      >
                        <div className="p-2 rounded-xl bg-black/40 border border-white/5">
                          <Icon className="h-5 w-5 shrink-0" style={{ color: tool.color }} />
                        </div>
                        <span className="text-xs font-medium text-[#ccc] font-display">
                          {tool.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Group 2: Code & Development */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="h-4 w-4 text-[#C9A84C]" />
                  <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-[#E1E0CC]">
                    Code &amp; Development Environment
                  </h4>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {codeTools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                      <div
                        key={tool.name}
                        className="flex items-center gap-3 p-3 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-[rgba(201,168,76,0.3)] hover:bg-white/[0.07] transition-all duration-200"
                      >
                        <div className="p-2 rounded-xl bg-black/40 border border-white/5">
                          <Icon className="h-5 w-5 shrink-0" style={{ color: tool.color }} />
                        </div>
                        <span className="text-xs font-medium text-[#ccc] font-display">
                          {tool.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#555]">
                <span>22 Technical &amp; Creative Tools</span>
                <LiquidButton size="sm" onClick={() => setIsModalOpen(false)}>
                  Close
                </LiquidButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
