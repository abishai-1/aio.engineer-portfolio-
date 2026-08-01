"use client";

import React, { useEffect, useRef, useState } from "react";

interface TubesCanvasProps {
  className?: string;
  isHovered?: boolean;
  colors?: string[];
  lightColors?: string[];
}

export function TubesCanvas({
  className = "",
  isHovered = true,
  colors = ["#C9A84C", "#F0C040", "#E1E0CC"],
  lightColors = ["#C9A84C", "#F5D565", "#FFFFFF", "#9E7D2F"],
}: TubesCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const appRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;

    const initTimer = setTimeout(() => {
      if (!canvasRef.current) return;

      try {
        // Dynamic ESM loader to bypass Webpack/TypeScript static resolution for CDN URLs
        const loadModule = new Function(
          `return import('https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js')`
        );

        loadModule()
          .then((module: { default: (canvas: HTMLCanvasElement, config: unknown) => unknown }) => {
            if (!isMounted || !canvasRef.current) return;
            const TubesCursor = module.default;

            const app = TubesCursor(canvasRef.current, {
              tubes: {
                colors,
                lights: {
                  intensity: 200,
                  colors: lightColors,
                },
              },
            });
            appRef.current = app;
          })
          .catch((err: unknown) => {
            console.error("TubesCursor module failed to load:", err);
          });
      } catch (e) {
        console.error("Failed to initialize TubesCursor loader:", e);
      }
    }, 120);

    return () => {
      isMounted = false;
      clearTimeout(initTimer);
      if (appRef.current && typeof appRef.current.dispose === "function") {
        try {
          appRef.current.dispose();
        } catch {
          // Ignore clean-up error
        }
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full pointer-events-none transition-opacity duration-700 ${
        isHovered ? "opacity-100" : "opacity-0"
      } ${className}`}
      aria-hidden="true"
    />
  );
}

export default function TubesCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const appRef = useRef<any>(null);

  const randomColors = (count: number) => {
    return new Array(count)
      .fill(0)
      .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"));
  };

  useEffect(() => {
    const initTimer = setTimeout(() => {
      if (!canvasRef.current) return;
      try {
        const loadModule = new Function(
          `return import('https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js')`
        );
        loadModule().then((module: { default: (canvas: HTMLCanvasElement, config: unknown) => unknown }) => {
          if (canvasRef.current) {
            const TubesCursor = module.default;
            const app = TubesCursor(canvasRef.current, {
              tubes: {
                colors: ["#C9A84C", "#F0C040", "#E1E0CC"],
                lights: {
                  intensity: 200,
                  colors: ["#C9A84C", "#F5D565", "#FFFFFF", "#9E7D2F"],
                },
              },
            });
            appRef.current = app;
          }
        });
      } catch (e) {
        console.error("TubesCursor error:", e);
      }
    }, 100);

    return () => {
      clearTimeout(initTimer);
      if (appRef.current && typeof appRef.current.dispose === "function") {
        appRef.current.dispose();
      }
    };
  }, []);

  const handleClick = () => {
    if (appRef.current && appRef.current.tubes) {
      const newTubeColors = randomColors(3);
      const newLightColors = randomColors(4);
      appRef.current.tubes.setColors(newTubeColors);
      appRef.current.tubes.setLightsColors(newLightColors);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="h-screen w-screen bg-black font-['Montserrat',_sans-serif] overflow-hidden cursor-pointer relative"
    >
      <canvas ref={canvasRef} className="fixed inset-0 z-0" />
      <div className="relative h-full flex flex-col items-center justify-center gap-2.5 z-10 pointer-events-none">
        <h1 className="m-0 p-0 text-white text-[80px] font-bold uppercase leading-none select-none [text-shadow:0_0_20px_rgba(0,0,0,1)]">
          Tubes
        </h1>
        <h2 className="m-0 p-0 text-white text-[60px] font-medium uppercase leading-none select-none [text-shadow:0_0_20px_rgba(0,0,0,1)]">
          Cursor
        </h2>
        <p className="m-0 p-0 text-white text-xl leading-none select-none [text-shadow:0_0_20px_rgba(0,0,0,1)]">
          Click to change colors
        </p>
      </div>
    </div>
  );
}
