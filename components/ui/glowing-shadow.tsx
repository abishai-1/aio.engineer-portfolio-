"use client";

import { type ReactNode } from "react";

interface GlowingShadowButtonProps {
  children: ReactNode;
  className?: string;
  compact?: boolean;
}

export function GlowingShadow({ children, className = "", compact = false }: GlowingShadowButtonProps) {
  return (
    <>
      <style jsx>{`
        @property --hue {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --rotate {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --bg-y {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --bg-x {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --glow-translate-y {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --bg-size {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --glow-opacity {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --glow-blur {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --glow-scale {
          syntax: "<number>";
          inherits: true;
          initial-value: 2;
        }
        @property --glow-radius {
          syntax: "<number>";
          inherits: true;
          initial-value: 2;
        }
        @property --white-shadow {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }

        .glow-container {
          --card-color: hsl(0deg 0% 6%);
          --text-color: hsl(260deg 10% 55%);
          --card-radius: 1.25rem;
          --card-width: 100%;
          --border-width: 1.5px;
          --bg-size: 1;
          --hue: 45;
          --hue-speed: 1;
          --rotate: 0;
          --animation-speed: 5s;
          --interaction-speed: 0.55s;
          --glow-scale: ${compact ? "0.6" : "1.25"};
          --scale-factor: 1;
          --glow-blur: ${compact ? "3" : "5"};
          --glow-opacity: ${compact ? "0.25" : "0.45"};
          --glow-radius: 100;
          --glow-rotate-unit: 1deg;

          width: 100%;
          height: 100%;
          color: white;
          margin: auto;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 2;
          border-radius: var(--card-radius);
        }

        .glow-container:before,
        .glow-container:after {
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: var(--card-radius);
        }

        .glow-content {
          position: relative; 
          background: var(--card-color);
          border-radius: calc(var(--card-radius) * 0.95);
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          padding: 1.5rem;
          z-index: 1;
        }

        .glow-content:before {
          content: "";
          display: block;
          position: absolute;
          inset: calc(var(--border-width) * -1);
          border-radius: calc(var(--card-radius) * 0.95);
          box-shadow: 0 0 12px rgba(0, 0, 0, 0.85);
          mix-blend-mode: color-burn;
          z-index: -1;
          background: hsl(0deg 0% 14%) radial-gradient(
            30% 30% at calc(var(--bg-x) * 1%) calc(var(--bg-y) * 1%),
            hsl(42deg 70% 55%) calc(0% * var(--bg-size)),
            hsl(42deg 60% 45%) calc(20% * var(--bg-size)),
            hsl(42deg 50% 30%) calc(40% * var(--bg-size)),
            transparent 100%
          );
          animation: hue-animation var(--animation-speed) linear infinite,
                     rotate-bg var(--animation-speed) linear infinite;
          transition: --bg-size var(--interaction-speed) ease;
        }

        .glow {
          --glow-translate-y: 0;
          display: block;
          position: absolute;
          width: ${compact ? "20%" : "35%"};
          height: ${compact ? "20%" : "35%"};
          top: ${compact ? "40%" : "32.5%"};
          left: ${compact ? "40%" : "32.5%"};
          animation: rotate var(--animation-speed) linear infinite;
          transform: rotateZ(calc(var(--rotate) * var(--glow-rotate-unit)));
          transform-origin: center;
          border-radius: calc(var(--glow-radius) * 10vw);
        }

        .glow:after {
          content: "";
          display: block;
          z-index: -2;
          filter: blur(calc(var(--glow-blur) * 6px));
          width: 125%;
          height: 125%;
          left: -12.5%;
          top: -12.5%;
          background: hsl(42deg 75% 48%);
          position: relative;
          border-radius: calc(var(--glow-radius) * 10vw);
          animation: hue-animation var(--animation-speed) linear infinite;
          transform: scaleY(calc(var(--glow-scale) * var(--scale-factor) / 1.1))
                     scaleX(calc(var(--glow-scale) * var(--scale-factor) * 1.2))
                     translateY(calc(var(--glow-translate-y) * 1%));
          opacity: var(--glow-opacity);
        }

        .glow-container:hover .glow-content {
          mix-blend-mode: normal;
          --text-color: white;
          box-shadow: 0 0 20px rgba(201, 168, 76, 0.28);
        }

        .glow-container:hover .glow-content:before {
          --bg-size: 10;
          animation-play-state: paused;
          transition: --bg-size var(--interaction-speed) ease;
        }

        .glow-container:hover .glow {
          --glow-blur: 2;
          --glow-opacity: 0.55;
          --glow-scale: 1.6;
          --glow-radius: 0;
          --rotate: 900;
          --glow-rotate-unit: 0;
          --scale-factor: 1.15;
          animation-play-state: paused;
        }

        .glow-container:hover .glow:after {
          --glow-translate-y: 0;
          animation-play-state: paused;
          transition: --glow-translate-y 0s ease, --glow-blur 0.05s ease,
                      --glow-opacity 0.05s ease, --glow-scale 0.05s ease,
                      --glow-radius 0.05s ease;
        }

        @keyframes shadow-pulse {
          0%, 24%, 46%, 73%, 96% {
            --white-shadow: 0.5;
          }
          12%, 28%, 41%, 63%, 75%, 82%, 98% {
            --white-shadow: 2.5;
          }
          6%, 32%, 57% {
            --white-shadow: 1.3;
          }
          18%, 52%, 88% {
            --white-shadow: 3.5;
          }
        }

        @keyframes rotate-bg {
          0% {
            --bg-x: 0;
            --bg-y: 0;
          }
          25% {
            --bg-x: 100;
            --bg-y: 0;
          }
          50% {
            --bg-x: 100;
            --bg-y: 100;
          }
          75% {
            --bg-x: 0;
            --bg-y: 100;
          }
          100% {
            --bg-x: 0;
            --bg-y: 0;
          }
        }

        @keyframes rotate {
          from {
            --rotate: -70;
            --glow-translate-y: -65;
          }
          25% {
            --glow-translate-y: -65;
          }
          50% {
            --glow-translate-y: -65;
          }
          60%, 75% {
            --glow-translate-y: -65;
          }
          85% {
            --glow-translate-y: -65;
          }
          to {
            --rotate: calc(360 - 70);
            --glow-translate-y: -65;
          }
        }

        @keyframes hue-animation {
          0% {
            --hue: 0;
          }
          100% {
            --hue: 360;
          }
        }
      `}</style>

      <div className={`glow-container ${className}`}>
        <span className="glow"></span>
        <div className="glow-content">{children}</div>
      </div>
    </>
  );
}
