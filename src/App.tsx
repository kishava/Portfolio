import {
  Code2,
  Database,
  LineChart,
  Shield,
  Sparkles,
  Wrench,
} from "lucide-react";
import { useCallback } from "react";
import { siteContent } from "./data/siteContent";
import { AnimeScrollOrbs } from "./components/animations/AnimeScrollOrbs";
import { StaggerReveal } from "./components/animations/StaggerReveal";
import { ActivityCard } from "./components/ActivityCard";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProjectCard } from "./components/ProjectCard";
import { Section } from "./components/Section";
import { SkillCategoryCard } from "./components/SkillCategoryCard";
import { SocialLinks } from "./components/SocialLinks";
import { TimelineCard } from "./components/TimelineCard";

const SKILL_ICONS = [
  Code2,
  Database,
  LineChart,
  Wrench,
  Shield,
  Sparkles,
] as const;

function App() {
  const scrollToContact = useCallback(() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimeScrollOrbs />
      <div className="relative z-10">
        <Navbar nav={siteContent.nav} />
        <main>
          <Hero
            name={siteContent.hero.name}
            title={siteContent.hero.title}
            location={siteContent.hero.location}
            profileImage={siteContent.hero.profileImage}
            socials={siteContent.socials}
            cvPdfPath={siteContent.cvPdfPath}
            cvDownloadEnabled={siteContent.cvDownloadEnabled}
            onContactClick={scrollToContact}
          />

        <Section
          id="about"
          title="About"
          subtitle="Background, focus areas, and what drives my work in software and systems."
        >
          <p className="glass max-w-3xl rounded-2xl p-6 text-base leading-relaxed text-white/75 sm:p-8 sm:text-lg">
            {siteContent.summary}
          </p>
        </Section>

        <Section
          id="skills"
          title="Skills"
          subtitle="Technologies and practices I use across development, data, and operations-style work."
        >
          <StaggerReveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siteContent.skills.map((cat, i) => (
              <SkillCategoryCard
                key={cat.title}
                title={cat.title}
                items={cat.items}
                icon={SKILL_ICONS[i] ?? Code2}
              />
            ))}
          </StaggerReveal>
        </Section>

        <Section
          id="projects"
          title="Projects"
          subtitle="Selected work with links to repositories and implementation notes."
        >
          <StaggerReveal className="grid gap-6 sm:grid-cols-2">
            {siteContent.projects.map((project) => (
              <ProjectCard key={project.repoUrl} project={project} />
            ))}
          </StaggerReveal>
        </Section>

        <Section
          id="experience"
          title="Experience"
          subtitle="Professional roles and measurable contributions."
        >
          <StaggerReveal className="flex flex-col gap-4">
            {siteContent.experience.map((job) => (
              <TimelineCard
                key={job.company + job.role}
                title={job.role}
                subtitle={job.company}
                period={job.period}
                bullets={job.highlights}
              />
            ))}
          </StaggerReveal>
        </Section>

        <Section
          id="education"
          title="Education & growth"
          subtitle="Formal qualifications, certifications, and campus leadership."
        >
          <div className="flex flex-col gap-4">
            {siteContent.education.map((edu) => (
              <TimelineCard
                key={edu.qualification}
                title={edu.qualification}
                subtitle={edu.institution}
                period={edu.period}
              />
            ))}
          </div>

          <h3 className="mb-4 mt-12 text-sm font-semibold uppercase tracking-widest text-white/40">
            Certifications
          </h3>
          <ul className="flex flex-wrap gap-2">
            {siteContent.certifications.map((c) => (
              <li
                key={c}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80"
              >
                {c}
              </li>
            ))}
          </ul>

          <h3 className="mb-4 mt-12 text-sm font-semibold uppercase tracking-widest text-white/40">
            Leadership & involvement
          </h3>
          <StaggerReveal className="grid gap-4 sm:grid-cols-2">
            {siteContent.activities.map((a) => (
              <ActivityCard key={a.title} activity={a} />
            ))}
          </StaggerReveal>

          <h3 className="mb-4 mt-12 text-sm font-semibold uppercase tracking-widest text-white/40">
            Languages
          </h3>
          <ul className="flex flex-wrap gap-2">
            {siteContent.languages.map((lang) => (
              <li
                key={lang}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-white/80"
              >
                {lang}
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="contact"
          title="Contact"
          subtitle="Reach out for collaborations, internships, or opportunities in software and IT operations."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="glass glass-hover rounded-2xl p-6 sm:p-8">
              <p className="text-sm text-white/55">Email</p>
              <a
                href={`mailto:${siteContent.contact.email}`}
                className="focus-ring mt-1 block text-lg font-medium text-white underline-offset-4 hover:underline"
              >
                {siteContent.contact.email}
              </a>
              <p className="mt-6 text-sm text-white/55">Phone</p>
              <a
                href={siteContent.contact.phoneHref}
                className="focus-ring mt-1 block text-lg font-medium text-white underline-offset-4 hover:underline"
              >
                {siteContent.contact.phoneDisplay}
              </a>
              <p className="mt-8 text-sm italic text-white/40">
                {siteContent.refereesNote}
              </p>
            </div>
            <div className="glass rounded-2xl p-6 sm:p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/40">
                Social & code
              </p>
              <SocialLinks links={siteContent.socials} />
              <p className="mt-8 text-sm leading-relaxed text-white/50">
                Prefer email for formal enquiries. GitHub and Behance showcase
                repositories and design-oriented work respectively.
              </p>
            </div>
          </div>
        </Section>
        </main>

        <Footer name={siteContent.hero.name} socials={siteContent.socials} />
      </div>
    </div>
  );
}

export default App;
