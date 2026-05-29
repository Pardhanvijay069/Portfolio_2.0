import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Modern Scrollytelling Portfolio",
    description: "A highly interactive developer portfolio featuring procedural 3D environments, cinematic color grading, and scroll-driven animations.",
    tech: ["Next.js", "Tailwind", "Three.js", "GSAP"]
  },
  {
    title: "CampusLive e8",
    description: "Scalable school management backend modules (admissions, attendance, RBAC) supporting 500+ concurrent users with real-time React dashboard.",
    tech: ["ASP.NET Core", "React.js", "SQL Server", "JWT"]
  },
  {
    title: "3D Product Configurator",
    description: "Interactive real-time 3D tool for color, material, and geometry customization; reduced client demo time by 40%.",
    tech: ["Three.js", "React.js", "Node.js", "WebGL"]
  },
  {
    title: "Scalable REST API Platform",
    description: "MVC-based REST API from scratch with JWT security, rate limiting, full Swagger documentation, and 99.9% uptime.",
    tech: ["Node.js", "Express", "TypeScript", "MySQL"]
  }
];

export default function Projects() {
  return (
    <section className="relative bg-canvas px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-eyebrow">
              Selected Work
            </p>
            <h2 className="section-title max-w-3xl">
              Interfaces with atmosphere, systems with backbone.
            </h2>
          </div>
          <p className="section-copy max-w-md">
            A focused set of products spanning cinematic frontends, immersive 3D configurators, and
            scalable backend systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative min-h-[340px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 shadow-glow backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:bg-white/[0.04] hover:shadow-[0_0_60px_rgba(212,98,42,0.15)]"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
                <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-accent/20 blur-[80px]" />
              </div>

              <div className="relative flex h-full flex-col">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <h3 className="card-title pr-2">
                    {project.title}
                  </h3>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-stone-400 transition-all duration-500 group-hover:border-accent/50 group-hover:bg-accent/10 group-hover:text-accent">
                    <ArrowUpRight size={22} aria-hidden="true" />
                  </span>
                </div>

                <p className="mb-8 text-sm leading-7 text-stone-400 transition-colors duration-500 group-hover:text-stone-300 sm:text-[15px]">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="tag-label group-hover:border-accent/30 group-hover:text-stone-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
