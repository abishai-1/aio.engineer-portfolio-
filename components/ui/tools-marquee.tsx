"use client";

import { useEffect, useRef } from "react";
import { Palette, Code2 } from "lucide-react";

/* ── Data ──────────────────────────────────────────── */

const CREATIVE_ITEMS = [
  "Blender",
  "Unreal Engine 5",
  "Photoshop",
  "Illustrator",
  "After Effects",
  "Premiere Pro",
  "DaVinci Resolve",
  "Figma",
  "Canva",
];

const CODE_ITEMS = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Python",
  "VS Code",
  "Git",
  "GitHub",
  "Node.js",
  "JSON",
];

const FONT_FAMILY =
  "var(--font-syne), var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif";

/* ── Single animated row ───────────────────────────── */

interface PerspectiveRowProps {
  items: string[];
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  pixelsPerSecond?: number;
  rotateY?: number;
  rotateX?: number;
  perspective?: number;
  fadeColor?: string;
  height?: number;
  reverse?: boolean;
}

function PerspectiveRow({
  items,
  fontSize = 52,
  color = "#E1E0CC",
  fontWeight = 600,
  pixelsPerSecond = 80,
  rotateY = -28,
  rotateX = 8,
  perspective = 1200,
  fadeColor = "#080808",
  height = 180,
  reverse = false,
}: PerspectiveRowProps) {
  const innerRef = useRef<HTMLDivElement>(null);
  const spanRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const offsetRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);

  const itemPadding = fontSize * 0.9;
  const approxItemWidth = items.reduce(
    (acc, item) => acc + item.length * fontSize * 0.6 + itemPadding,
    0,
  );
  const rendered = [...items, ...items, ...items];

  // Reference x-position for peak sharpness.
  // Row 1 (left-moving)  → slightly right of centre (790).
  // Row 2 (right-moving) → further right (1110) — opposite side, shifted right.
  const visCenter = reverse ? 1110 : 790;

  useEffect(() => {
    spanRefs.current = spanRefs.current.slice(0, rendered.length);

    const loop = (time: number) => {
      if (lastTimeRef.current !== null) {
        const dt = (time - lastTimeRef.current) / 1000;
        offsetRef.current = (offsetRef.current + pixelsPerSecond * dt) % approxItemWidth;
      }
      lastTimeRef.current = time;

      const tx = reverse
        ? offsetRef.current - approxItemWidth  // sweeps right (left-to-right)
        : -offsetRef.current;                  // sweeps left (right-to-left)

      /* update scroll position */
      if (innerRef.current) {
        innerRef.current.style.transform = `translateX(${tx}px)`;
      }

      /* update per-item blur + opacity based on current position vs visibility peak */
      spanRefs.current.forEach((span, i) => {
        if (!span) return;
        const itemCenter =
          i * (approxItemWidth / items.length) +
          approxItemWidth / items.length / 2 +
          tx;
        const norm = (itemCenter - visCenter) / 640;
        const distance = Math.min(1, Math.abs(norm));
        const blurPx = distance * 6;
        const opacity = 1 - distance * 0.4;
        span.style.filter = `blur(${blurPx}px)`;
        span.style.opacity = String(opacity);
      });

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [items, pixelsPerSecond, approxItemWidth, visCenter, reverse]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: `${height}px`,
        background: "#080808",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        perspective: `${perspective}px`,
      }}
    >
      {/* 3-D perspective wrapper */}
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Scrolling track — updated imperatively via RAF */}
        <div
          ref={innerRef}
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            willChange: "transform",
          }}
        >
          {rendered.map((item, i) => (
            <span
              key={`${item}-${i}`}
              ref={(el) => { spanRefs.current[i] = el; }}
              style={{
                display: "inline-block",
                fontFamily: FONT_FAMILY,
                fontSize,
                fontWeight,
                color,
                letterSpacing: "-0.03em",
                paddingRight: itemPadding,
                userSelect: "none",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Horizontal edge fade */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `linear-gradient(90deg, ${fadeColor} 0%, transparent 16%, transparent 84%, ${fadeColor} 100%)`,
        }}
      />
      {/* Vertical edge fade */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `linear-gradient(180deg, ${fadeColor} 0%, transparent 22%, transparent 78%, ${fadeColor} 100%)`,
        }}
      />
    </div>
  );
}

/* ── Public component ──────────────────────────────── */

export function ToolsMarquee() {
  return (
    <div className="space-y-6">
      {/* Row 1 — Creative & 3D Design */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Palette className="h-3.5 w-3.5 text-[#C9A84C]" />
          <span className="font-display text-xs uppercase tracking-[0.2em] text-[#666]">
            Creative &amp; 3D Design
          </span>
        </div>

        {/* Full-width row — no border, no padding, edge-to-edge */}
        <PerspectiveRow
          items={CREATIVE_ITEMS}
          rotateX={8}
          rotateY={-28}
          pixelsPerSecond={70}
          height={180}
        />
      </div>

      {/* Row 2 — Code & Web Stack */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Code2 className="h-3.5 w-3.5 text-[#C9A84C]" />
          <span className="font-display text-xs uppercase tracking-[0.2em] text-[#666]">
            Code &amp; Web Stack
          </span>
        </div>

        {/* Mirrored rotations for visual contrast */}
        <PerspectiveRow
          items={CODE_ITEMS}
          rotateX={8}
          rotateY={28}
          pixelsPerSecond={70}
          height={180}
          reverse
        />
      </div>
    </div>
  );
}
