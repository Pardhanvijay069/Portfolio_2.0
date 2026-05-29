import Projects from "@/components/Projects";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas text-stone-50 selection:bg-accent/30 selection:text-white">
      <ScrollyCanvas />
      <Skills />
      <Experience />
      <Projects />
    </main>
  );
}
