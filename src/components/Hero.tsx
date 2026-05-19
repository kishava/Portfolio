import { motion } from "framer-motion";
import { ArrowDownRight, Download, Mail } from "lucide-react";
import type { SocialLink as SocialLinkType } from "../data/siteContent";
import { ProfilePortrait } from "./animations/ProfilePortrait";
import { ScrollReveal } from "./animations/ScrollReveal";
import { SocialLinks } from "./SocialLinks";

interface HeroProps {
  name: string;
  title: string;
  location: string;
  profileImage: string;
  socials: readonly SocialLinkType[];
  cvPdfPath: string;
  cvDownloadEnabled: boolean;
  onContactClick: () => void;
}

export function Hero({
  name,
  title,
  location,
  profileImage,
  socials,
  cvPdfPath,
  cvDownloadEnabled,
  onContactClick,
}: HeroProps) {
  return (
    <motion.div
      id="top"
      className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-32 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full blur-3xl sm:h-96 sm:w-96"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.15 195 / 0.35), transparent 70%)",
        }}
        aria-hidden
      />
      <motion.div
        className="relative mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1fr_minmax(240px,320px)] lg:gap-14"
        style={{ transformPerspective: 1400 }}
      >
        <ScrollReveal depth="strong" className="min-w-0">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[oklch(0.78_0.12_195)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.78_0.14_195)]" />
            Open to opportunities
          </p>
          <h1 className="font-display text-5xl italic leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/75 sm:text-xl">
            {title}
          </p>
          <p className="mt-2 text-sm text-white/50">{location}</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
            {cvDownloadEnabled ? (
              <a
                href={cvPdfPath}
                download
                className="focus-ring glass glass-hover inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
              >
                <Download className="h-4 w-4" aria-hidden />
                Download CV
              </a>
            ) : (
              <span
                className="glass inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full border border-dashed border-white/20 px-6 py-3 text-sm font-medium text-white/45"
                title="Add your PDF to public/cv/ and enable cvDownloadEnabled in siteContent.ts"
              >
                <Download className="h-4 w-4 shrink-0" aria-hidden />
                CV — add PDF to enable
              </span>
            )}
            <button
              type="button"
              onClick={onContactClick}
              className="focus-ring glass glass-hover inline-flex items-center justify-center gap-2 rounded-full border border-[oklch(0.78_0.14_195_/0.35)] bg-[oklch(0.78_0.14_195_/0.12)] px-6 py-3 text-sm font-semibold text-white"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Contact me
              <ArrowDownRight className="h-4 w-4 opacity-70" aria-hidden />
            </button>
          </div>

          <motion.div
            className="mt-12 border-t border-white/10 pt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
              Connect
            </p>
            <SocialLinks links={socials} />
          </motion.div>
        </ScrollReveal>

        <motion.div
          className="order-first lg:order-none"
          initial={{ opacity: 0, scale: 0.92, rotateY: -16 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformPerspective: 1200 }}
        >
          <ProfilePortrait src={profileImage} alt={`Portrait of ${name}`} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
