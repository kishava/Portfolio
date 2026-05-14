import type { SocialLink as SocialLinkType } from "../data/siteContent";

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconGitHub({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function IconBehance({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.464zm-10.96-5.093c0 .637-.043 1.095-.117 1.409-.896 3.768-4.315 3.332-4.315 1.002 0-1.73 1.57-2.58 4.432-2.58h.001zm-9.542-1.017c0 1.918-.012 2.447-.012 3.443 0 1.454-.108 2.633-.938 3.338-.637.533-1.508.868-2.941.868C1.018 22 0 21.31 0 18.598c0-1.514.561-2.598 1.627-3.179 1.049-.569 2.505-.761 4.556-.761h.051c0-.93-.089-1.648-.404-2.216-.348-.63-1.039-.9-2.131-.9-1.571 0-2.35.585-2.486 1.607H.695c.167-2.004 1.85-3.315 4.771-3.315 1.931 0 3.596.808 4.256 2.75h1.643c-.11-.566-.17-1.095-.17-1.602V5.48H7.108c-.09 1.237-.565 2.208-1.396 2.933-.764.672-1.674 1.152-2.723 1.152v1.131c1.345 0 2.305.452 3.074 1.22.76.76 1.152 1.811 1.152 3.14v.057z" />
    </svg>
  );
}

function SocialGlyph({ icon }: { icon: SocialLinkType["icon"] }) {
  const className = "h-5 w-5 shrink-0";
  switch (icon) {
    case "linkedin":
      return <IconLinkedIn className={className} />;
    case "github":
      return <IconGitHub className={className} />;
    case "behance":
      return <IconBehance className={className} />;
    default:
      return null;
  }
}

interface SocialLinksProps {
  links: readonly SocialLinkType[];
  className?: string;
  buttonClassName?: string;
}

export function SocialLinks({
  links,
  className = "",
  buttonClassName = "",
}: SocialLinksProps) {
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`focus-ring inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition hover:border-[oklch(0.78_0.14_195_/0.35)] hover:bg-white/10 hover:text-white ${buttonClassName}`}
          >
            <SocialGlyph icon={link.icon} />
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
