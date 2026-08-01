"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "services", label: "Services", href: "#services" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "philosophy", label: "Philosophy", href: "#philosophy" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export function PortfolioNav() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sectionIds = ["home", "about", "services", "experience", "philosophy", "contact"];
    
    // Track ratios of all sections to find the most prominent section in view
    const ratios: Record<string, number> = {};

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        ratios[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
      });

      let maxRatio = 0;
      let mostVisibleSection = "home";

      Object.entries(ratios).forEach(([id, ratio]) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          mostVisibleSection = id;
        }
      });

      if (maxRatio > 0) {
        setActiveSection(mostVisibleSection);
      } else {
        // Fallback: check if scroll is near top
        if (window.scrollY < 200) {
          setActiveSection("home");
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-15% 0px -25% 0px",
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isHeroInView = activeSection === "home";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (item.isExternal) {
      // Direct navigation to /error page
      return;
    }
    e.preventDefault();
    if (item.id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetEl = document.getElementById(item.id);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed left-1/2 z-50 -translate-x-1/2 transition-all duration-[1500ms] ease-in-out pointer-events-auto",
        isHeroInView ? "top-0" : "top-3 md:top-4"
      )}
    >
      <div
        className={cn(
          "glass-nav flex items-center gap-3 px-4 py-2 sm:gap-5 md:gap-7 lg:gap-8 transition-all duration-[1500ms] ease-in-out",
          isHeroInView ? "rounded-b-2xl md:rounded-b-3xl" : "rounded-full shadow-lg shadow-black/40"
        )}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {NAV_ITEMS.map((item) => {
            const isVisible = activeSection !== item.id;
            if (!isVisible) return null;

            return (
              <motion.a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)", y: -8 }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, scale: 0.85, filter: "blur(8px)", y: -8 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                layout
                className="relative text-[10px] sm:text-xs md:text-sm font-medium transition-colors duration-500 cursor-pointer select-none"
                style={{ color: "rgba(225, 224, 204, 0.7)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#E1E0CC";
                  e.currentTarget.style.textShadow = "0 0 12px rgba(225,224,204,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(225, 224, 204, 0.7)";
                  e.currentTarget.style.textShadow = "none";
                }}
              >
                {item.label}
              </motion.a>
            );
          })}
        </AnimatePresence>
      </div>
    </nav>
  );
}
