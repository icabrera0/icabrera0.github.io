import Navbar from "@/components/Navbar"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Experience from "@/components/sections/Experience"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import Education from "@/components/sections/Education"
import Contact from "@/components/sections/Contact"

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <footer className="py-8 text-center border-t border-white/5">
        <p className="text-white/20 text-xs">
          © 2026 Izan Cabrera Martínez · Built with Next.js, Framer Motion &amp; shadcn/ui
        </p>
      </footer>
    </main>
  )
}
