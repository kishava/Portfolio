import { SocialLinks } from "./SocialLinks";
import type { SocialLink as SocialLinkType } from "../data/siteContent";

interface FooterProps {
  name: string;
  socials: readonly SocialLinkType[];
}

export function Footer({ name, socials }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-xl italic text-white">{name}</p>
          <p className="mt-1 text-sm text-white/45">
            © {year} {name}. Built with React & Vite.
          </p>
        </div>
        <SocialLinks links={socials} />
      </div>
    </footer>
  );
}
