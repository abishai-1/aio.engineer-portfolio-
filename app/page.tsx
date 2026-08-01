import Link from "next/link";
import { PrismaHero } from "@/components/ui/prisma-hero";
import { AboutSection } from "@/components/ui/about-section";
import { ServicesSection } from "@/components/ui/services-section";
import { ExperienceSection } from "@/components/ui/experience-section";
import { PhilosophySection } from "@/components/ui/philosophy-section";
import { ContactSection } from "@/components/ui/contact-section";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { FooterBeam } from "@/components/ui/footer-beam";

export default function Home() {
  return (
    <>
      {/* Thin gradient scroll-progress bar fixed at the top */}
      <ScrollProgress />

      <main>
        {/* Hero — full-screen cinematic section (unchanged) */}
        <PrismaHero />

        {/* About Me */}
        <AboutSection />

        {/* Services bento grid */}
        <ServicesSection />

        {/* Experience cards with stats integrated */}
        <ExperienceSection />

        {/* Philosophy quote */}
        <PhilosophySection />

        {/* Contact CTA */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative pt-12 pb-8 border-t border-[rgba(255,255,255,0.05)] bg-[#080808] overflow-hidden">
        {/* Background ambient gold particle glows in empty space */}
        <div className="absolute top-1/2 left-6 -translate-y-1/2 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute top-1/2 right-6 -translate-y-1/2 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(240,192,64,0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center gap-3 relative z-10">
          {/* Animated Beam central interactive connect node */}
          <FooterBeam />

          {/* Left & Right Links (Projects on Left, Connect on Right) */}
          <div className="w-full flex items-center justify-between text-xs font-display font-medium tracking-widest uppercase px-2 sm:px-6 pt-1">
            <Link
              href="/error"
              className="text-[#888] hover:text-[#C9A84C] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/error"
              className="text-[#888] hover:text-[#C9A84C] transition-colors"
            >
              Connect
            </Link>
          </div>

          {/* Footer Taglines */}
          <div className="text-center space-y-0.5 pt-1">
            <p className="text-[#666] text-xs sm:text-sm font-display tracking-wide">
              Every pixel has a purpose.
            </p>
            <p className="text-[#555] text-xs font-display italic">
              Every interaction tells a story.
            </p>
          </div>

          {/* Copyright & Website info */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <p className="text-[#444] text-sm font-display">
              © {new Date().getFullYear()} Abishai Yelleti. All rights reserved.
            </p>
            <p className="text-[#444] text-xs font-display">
              <span className="text-[#666] font-semibold">aio.engineer</span> — Creative Technologist — Available Worldwide
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
