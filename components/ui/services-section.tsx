"use client";

import { motion, useInView } from "framer-motion";
import {
  Globe,
  Paintbrush,
  Layers,
  Video,
  Camera,
  Box,
  Sparkles,
  Mountain,
  Gamepad2,
  Rocket,
  Wand2,
  Layout,
  Compass,
  Cpu,
  Image as ImageIcon,
  Zap,
} from "lucide-react";
import { useRef, useState } from "react";
import { TubesCanvas } from "@/components/ui/tubes-curor";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    desc: "Modern, performant web experiences built with React & Next.js.",
  },
  {
    icon: Paintbrush,
    title: "Brand Identity & Graphic Design",
    desc: "Logos, visual systems, typography & brand guidelines.",
  },
  {
    icon: Layers,
    title: "Motion Graphics",
    desc: "Dynamic animations for digital campaigns, titles & media.",
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "Cinematic cuts, storytelling, pacing & post-production polish.",
  },
  {
    icon: Camera,
    title: "Photo Manipulation",
    desc: "Digital compositing, advanced retouching & visual artwork.",
  },
  {
    icon: Box,
    title: "3D Modelling",
    desc: "Hard-surface & organic 3D assets ready for production pipelines.",
  },
  {
    icon: Sparkles,
    title: "3D Animation",
    desc: "Character, product & cinematic environment animation sequences.",
  },
  {
    icon: Mountain,
    title: "Environment Design",
    desc: "Cinematic world-building — landscapes, sets & atmospheres.",
  },
  {
    icon: Gamepad2,
    title: "Unreal Engine Visuals",
    desc: "Real-time rendering, architectural viz & game-ready environments.",
  },
  {
    icon: Rocket,
    title: "Product Visualization",
    desc: "High-fidelity product renders, turntables & promotional demos.",
  },
  {
    icon: Wand2,
    title: "VFX & Visual Effects",
    desc: "Compositing, particle simulations & cinematic post-effects.",
  },
  {
    icon: Layout,
    title: "UI / UX Design",
    desc: "Intuitive interfaces, wireframes, prototypes & design systems.",
  },
  {
    icon: Compass,
    title: "Creative Direction",
    desc: "Visual strategy, artistic direction & cohesive brand storytelling.",
  },
  {
    icon: Cpu,
    title: "Game & Real-time Art",
    desc: "Optimized low/high-poly 3D models, UV mapping & game textures.",
  },
  {
    icon: ImageIcon,
    title: "Key Art & Media Design",
    desc: "Cinematic movie posters, album covers & promotional graphics.",
  },
  {
    icon: Zap,
    title: "Visual Concept & AI Work",
    desc: "Rapid concept ideation, moodboards & digital visual prototyping.",
  },
];

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isCardsHovered, setIsCardsHovered] = useState(false);

  return (
    <section id="services" className="relative py-28 md:py-36 bg-[#0a0a0a] overflow-hidden">
      {/* Tubes Cursor Background Canvas — only visible/active on cards hover */}
      <TubesCanvas isHovered={isCardsHovered} className="z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10" ref={ref}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-xs uppercase tracking-[0.3em] text-[#3a3a3a] mb-4"
            >
              02 — What I Do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl md:text-5xl font-bold gradient-text-cream leading-tight"
            >
              A full spectrum of creative disciplines.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#555] text-sm md:text-base max-w-xs text-right hidden md:block"
          >
            16 disciplines. One creative vision.
          </motion.p>
        </div>

        {/* Symmetric 4 x 4 grid (16 equal cards) — activates Tubes effect on hover */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
          onMouseEnter={() => setIsCardsHovered(true)}
          onMouseLeave={() => setIsCardsHovered(false)}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.03 + i * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="service-card group rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[#111]/90 backdrop-blur-sm p-5 md:p-6 flex flex-col justify-between h-full hover:border-[rgba(201,168,76,0.4)] hover:bg-[#14120c]/95 transition-all duration-300 cursor-default"
              >
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.14)] transition-colors duration-300 group-hover:bg-[rgba(201,168,76,0.14)]">
                    <Icon className="h-5 w-5 text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[#E1E0CC] text-sm md:text-base font-semibold leading-snug mb-2 font-display">
                    {service.title}
                  </h3>
                  <p className="text-[#555] group-hover:text-[#888] transition-colors text-xs md:text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Concluding Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center max-w-3xl mx-auto border-t border-[rgba(255,255,255,0.06)] pt-10"
        >
          <p className="text-[#777] text-sm md:text-base leading-relaxed font-body">
            I believe great design goes beyond aesthetics, it communicates, inspires, and connects. By blending creativity with technology, I create tailored digital experiences that not only look exceptional but also reflect your vision, tell compelling stories, and leave a lasting impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
