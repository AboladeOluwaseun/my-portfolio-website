import { Intro, Hero, Projects, Contact, DomHead } from "../components";

export default function HomePage() {
  return (
    <>
      <div className="w-full">
        <DomHead />
        <Hero />
        <Intro />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
