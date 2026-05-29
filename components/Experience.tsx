const experience = [
  {
    role: "Full Stack .NET & Frontend Developer",
    company: "Stellar Data Solution Pvt. Ltd.",
    date: "Jun 2023 - Mar 2026",
    details: [
      "Engineered 20+ production-grade RESTful APIs using ASP.NET Core 6 with 99.9% uptime.",
      "Optimized SQL Server stored procedures achieving 60% improvement in query performance.",
      "Implemented JWT Authentication and RBAC, securing 10+ API endpoints.",
      "Led end-to-end migration of legacy .NET Framework 4.6 to .NET 6.",
      "Built interactive 3D visualizations using Three.js and WebGL."
    ]
  },
  {
    role: "PHP Developer - Freelance",
    company: "Independent Projects",
    date: "Mar 2022 - Feb 2023",
    details: [
      "Built full-stack e-commerce platforms using Core PHP, MySQL, and JavaScript.",
      "Implemented OOP-based CRUD systems, REST API integrations, and Laravel MVC architecture."
    ]
  },
  {
    role: "React.js & Three.js Developer - Freelance",
    company: "Independent Projects",
    date: "Jan 2023 - May 2023",
    details: [
      "Delivered responsive React.js applications with hooks and Context API.",
      "Built Three.js 3D product configurators for e-commerce clients.",
      "Developed Node.js + Express backend APIs with MySQL and JWT auth."
    ]
  }
];

export default function Experience() {
  return (
    <section className="relative border-t border-white/5 bg-canvas px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16">
          <p className="section-eyebrow">Professional Timeline</p>
          <h2 className="section-title">Experience.</h2>
        </div>

        <div className="flex flex-col gap-12 border-l border-white/10 pl-8 md:pl-12">
          {experience.map((job, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border border-accent bg-canvas transition-colors duration-500 group-hover:bg-accent group-hover:shadow-[0_0_15px_rgba(212,98,42,0.8)] md:-left-[57px]" />

              <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <h3 className="card-title">{job.role}</h3>
                <span className="meta-label shrink-0">{job.date}</span>
              </div>

              <p className="mb-6 text-base font-medium leading-7 text-stone-300 sm:text-lg">
                {job.company}
              </p>

              <ul className="flex flex-col gap-3">
                {job.details.map((detail, dIdx) => (
                  <li
                    key={dIdx}
                    className="flex max-w-3xl items-start gap-3 text-sm leading-7 text-stone-400 sm:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                    <span className="transition-colors duration-300 group-hover:text-stone-300">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
