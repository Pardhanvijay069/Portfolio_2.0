import { Linkedin, Mail, Phone } from "lucide-react";

const contactMethods = [
  {
    label: "Phone",
    value: "+91 9053895287",
    href: "tel:+919053895287",
    icon: Phone
  },
  {
    label: "Email",
    value: "pardhanvijay069@gmail.com",
    href: "mailto:pardhanvijay069@gmail.com",
    icon: Mail
  },
  {
    label: "LinkedIn",
    value: "www.linkedin.com/in/vijay-kumar-a359a4253",
    href: "https://www.linkedin.com/in/vijay-kumar-a359a4253",
    icon: Linkedin
  }
] as const;

export default function Contact() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-canvas px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/[0.03] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 xl:grid-cols-[1.15fr_0.85fr] xl:items-start">
          <div className="space-y-6">
            <p className="section-eyebrow">Contact</p>
            <h2 className="section-title max-w-3xl">
              Let&apos;s build reliable products and thoughtful developer experiences.
            </h2>
            <p className="section-copy max-w-2xl">
              Available for full-stack engineering roles, frontend-heavy product work, and
              collaborations where clean architecture and polished execution both matter.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            {contactMethods.map((method) => {
              const Icon = method.icon;

              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.label === "LinkedIn" ? "_blank" : undefined}
                  rel={method.label === "LinkedIn" ? "noreferrer" : undefined}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-glow backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.05] hover:shadow-[0_0_50px_rgba(212,98,42,0.14)] sm:p-6"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                  </div>

                  <div className="relative flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-accent transition-colors duration-500 group-hover:border-accent/50 group-hover:bg-accent/10">
                      <Icon size={20} aria-hidden="true" />
                    </span>

                    <div className="min-w-0">
                      <p className="meta-label mb-2">{method.label}</p>
                      <p className="break-words text-sm font-medium leading-7 text-stone-100 sm:text-[15px]">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <footer className="mt-16 flex flex-col gap-6 rounded-[28px] border border-white/10 bg-white/[0.02] px-6 py-6 backdrop-blur-xl sm:px-8 lg:mt-20 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-base font-semibold tracking-[0.01em] text-stone-100">
              Vijay Kumar
            </p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-stone-400">
              Full Stack Developer focused on scalable backend systems, responsive interfaces,
              and production-ready user experiences.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-stone-300 sm:items-end">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.label === "LinkedIn" ? "_blank" : undefined}
                rel={method.label === "LinkedIn" ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-accent"
              >
                <method.icon size={16} aria-hidden="true" />
                <span className="break-all sm:break-normal">{method.value}</span>
              </a>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
}
