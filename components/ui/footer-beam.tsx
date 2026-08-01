"use client";

import React, { forwardRef, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { PlugZap, Mail, Linkedin, Github, Instagram, Sparkles } from "lucide-react";
import { SiWhatsapp, SiDiscord } from "react-icons/si";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; href?: string; title?: string }
>(({ className, children, href, title }, ref) => {
  const handleClick = (e: React.MouseEvent) => {
    if (!href) return;
    e.stopPropagation();

    if (href.startsWith("mailto:")) {
      // 1. Trigger default system email client
      window.location.href = href;
      // 2. Open Gmail webmail as reliable fallback in a new tab
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=abishaiyelleti1@gmail.com&su=Project%20Inquiry%20-%20Abishai%20Yelleti",
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      ref={ref}
      title={title}
      onClick={handleClick}
      className={cn(
        "z-20 relative flex size-11 items-center justify-center rounded-full border border-[rgba(255,255,255,0.1)] bg-[#111] p-2.5 text-[#E1E0CC] shadow-lg transition-all duration-300 hover:scale-110 hover:border-[rgba(201,168,76,0.5)] hover:bg-[#181610] hover:text-[#C9A84C] hover:shadow-[0_0_15px_rgba(201,168,76,0.3)] cursor-pointer pointer-events-auto",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

/* ── 3D Wireframe Cube Illustration ── */
function FloatingWireframeCube() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.35, 0.65, 0.35],
        y: [0, -14, 0],
        rotate: [0, 360],
      }}
      transition={{
        opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 24, repeat: Infinity, ease: "linear" },
      }}
      className="hidden xl:block absolute -left-20 top-1/2 -translate-y-1/2 w-28 h-28 pointer-events-none z-0"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="cube-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2A8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <polygon points="50,15 85,35 50,55 15,35" fill="none" stroke="url(#cube-grad)" strokeWidth="1.5" />
        <polygon points="15,35 50,55 50,90 15,70" fill="none" stroke="url(#cube-grad)" strokeWidth="1.5" />
        <polygon points="50,55 85,35 85,70 50,90" fill="none" stroke="url(#cube-grad)" strokeWidth="1.5" />
        <circle cx="50" cy="15" r="2.5" fill="#F0C040" />
        <circle cx="85" cy="35" r="2.5" fill="#F0C040" />
        <circle cx="50" cy="55" r="3" fill="#FFF2A8" />
        <circle cx="15" cy="35" r="2.5" fill="#F0C040" />
        <circle cx="50" cy="90" r="2.5" fill="#F0C040" />
      </svg>
    </motion.div>
  );
}

/* ── Floating Orbital Rings Illustration ── */
function FloatingOrbitalRings() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.35, 0.65, 0.35],
        y: [0, 14, 0],
      }}
      transition={{
        opacity: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
        y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
      }}
      className="hidden xl:block absolute -right-20 top-1/2 -translate-y-1/2 w-28 h-28 pointer-events-none z-0"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#F0C040" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <motion.ellipse
          cx="50"
          cy="50"
          rx="42"
          ry="18"
          fill="none"
          stroke="url(#ring-grad)"
          strokeWidth="1.5"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "50px 50px" }}
        />
        <motion.ellipse
          cx="50"
          cy="50"
          rx="36"
          ry="14"
          fill="none"
          stroke="url(#ring-grad)"
          strokeWidth="1"
          strokeDasharray="4 4"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "50px 50px" }}
        />
        <circle cx="50" cy="50" r="8" fill="url(#ring-grad)" />
        <circle cx="50" cy="50" r="3.5" fill="#FFF2A8" />
      </svg>
    </motion.div>
  );
}

export function FooterBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const whatsappRef = useRef<HTMLDivElement>(null);
  const instagramRef = useRef<HTMLDivElement>(null);
  const discordRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const githubRef = useRef<HTMLDivElement>(null);
  const linkedinRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full flex flex-col items-center justify-center pt-2 pb-1 relative">
      {/* Floating 3D Vector Illustrations in Empty Space */}
      <FloatingWireframeCube />
      <FloatingOrbitalRings />

      {/* Floating Ambient Sparkles */}
      <motion.div
        animate={{ opacity: [0.2, 0.7, 0.2], y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/4 -top-4 pointer-events-none"
      >
        <Sparkles className="h-4 w-4 text-[#C9A84C]" />
      </motion.div>
      <motion.div
        animate={{ opacity: [0.3, 0.8, 0.3], y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-1/4 -bottom-2 pointer-events-none"
      >
        <Sparkles className="h-4 w-4 text-[#F0C040]" />
      </motion.div>

      <div
        className="relative flex h-[280px] w-full max-w-2xl items-center justify-center overflow-hidden rounded-3xl border border-[rgba(255,255,255,0.06)] bg-[#0a0a0a]/80 p-6 backdrop-blur-md shadow-2xl z-10"
        ref={containerRef}
      >
        {/* Background ambient radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="flex size-full flex-col max-w-lg max-h-[220px] items-stretch justify-between gap-6 relative z-10">
          {/* Top Row: WhatsApp (Left) & GitHub (Right) */}
          <div className="flex flex-row items-center justify-between">
            <Circle
              ref={whatsappRef}
              href="https://wa.me/917386490593?text=Hi%20Abishai,%20I'd%20love%20to%20connect!"
              title="Message on WhatsApp"
            >
              <SiWhatsapp className="h-5 w-5 text-[#25D366]" />
            </Circle>
            <Circle ref={githubRef} href="https://github.com/abishai-1" title="GitHub">
              <Github className="h-5 w-5 text-white" />
            </Circle>
          </div>

          {/* Middle Row: Email (Left), Central Plug (Center), LinkedIn (Right) */}
          <div className="flex flex-row items-center justify-between">
            <Circle
              ref={emailRef}
              href="mailto:abishaiyelleti1@gmail.com?subject=Project%20Inquiry%20-%20Abishai%20Yelleti&body=Hi%20Abishai,%0A%0AI'd%20love%20to%20connect%20and%20discuss%20a%20project!"
              title="Send an Email"
            >
              <Mail className="h-5 w-5 text-[#C9A84C]" />
            </Circle>
            <Circle
              ref={centerRef}
              className="size-16 border border-[rgba(201,168,76,0.35)] bg-[#050505] text-[#C9A84C] shadow-[0_0_20px_rgba(0,0,0,0.9),0_0_15px_rgba(201,168,76,0.15)] cursor-default"
              title="Wire & Plug Center"
            >
              <PlugZap className="h-7 w-7 text-[#C9A84C]" strokeWidth={1.75} />
            </Circle>
            <Circle
              ref={linkedinRef}
              href="https://www.linkedin.com/in/abishai-yelleti/"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-[#0A66C2]" />
            </Circle>
          </div>

          {/* Bottom Row: Discord (Left) & Instagram (Right) */}
          <div className="flex flex-row items-center justify-between">
            <Circle ref={discordRef} href="https://discord.gg/cmrfz2E6b" title="Discord">
              <SiDiscord className="h-5 w-5 text-[#5865F2]" />
            </Circle>
            <Circle ref={instagramRef} href="https://www.instagram.com/aio.yk" title="Instagram">
              <Instagram className="h-5 w-5 text-[#E4405F]" />
            </Circle>
          </div>
        </div>

        {/* 6 Beams: Middle lines straight, Top & Bottom symmetrically identical curves */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={whatsappRef}
          toRef={centerRef}
          curvature={-55}
          endYOffset={-6}
          gradientStartColor="#C9A84C"
          gradientStopColor="#F0C040"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={emailRef}
          toRef={centerRef}
          curvature={0}
          endYOffset={0}
          gradientStartColor="#C9A84C"
          gradientStopColor="#F0C040"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={discordRef}
          toRef={centerRef}
          curvature={55}
          endYOffset={6}
          gradientStartColor="#C9A84C"
          gradientStopColor="#F0C040"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={githubRef}
          toRef={centerRef}
          curvature={-55}
          endYOffset={-6}
          reverse
          gradientStartColor="#C9A84C"
          gradientStopColor="#F0C040"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={linkedinRef}
          toRef={centerRef}
          curvature={0}
          endYOffset={0}
          reverse
          gradientStartColor="#C9A84C"
          gradientStopColor="#F0C040"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={instagramRef}
          toRef={centerRef}
          curvature={55}
          endYOffset={6}
          reverse
          gradientStartColor="#C9A84C"
          gradientStopColor="#F0C040"
        />
      </div>
    </div>
  );
}
