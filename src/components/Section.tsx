import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 px-4 py-16 sm:scroll-mt-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 sm:mb-12">
          <h2 className="font-display text-3xl italic tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2 max-w-2xl text-base text-white/60">{subtitle}</p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
