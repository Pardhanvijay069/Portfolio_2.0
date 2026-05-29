const skillCategories = [
  {
    title: "Languages",
    skills: ["C#", "JavaScript", "TypeScript", "PHP", "SQL", "HTML/CSS"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["ASP.NET Core (.NET 6)", "React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js", "React Three Fiber", "GSAP"]
  },
  {
    title: "Databases & Tools",
    skills: ["SQL Server", "MySQL", "Git", "Swagger/OpenAPI", "Postman", "Visual Studio"]
  },
  {
    title: "Concepts & Security",
    skills: ["REST APIs", "MVC Architecture", "Microservices", "JWT Authentication", "RBAC", "Creative Coding"]
  }
];

export default function Skills() {
  return (
    <section className="relative bg-canvas px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="section-eyebrow">
            Core Competencies
          </p>
          <h2 className="section-title max-w-3xl">
            Technical Arsenal.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 shadow-glow backdrop-blur-xl transition-all duration-500 hover:border-accent/30 hover:bg-white/[0.04]"
            >
              <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                <div className="absolute -left-24 -top-24 h-48 w-48 rounded-full bg-accent/10 blur-[60px]" />
              </div>
              <div className="relative z-10">
                <h3 className="card-title mb-6">
                  {category.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm font-medium leading-6 text-stone-400 transition-colors group-hover:text-stone-300 sm:text-[15px]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
