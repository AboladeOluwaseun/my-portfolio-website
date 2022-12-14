import { Intro, Hero, Projects, Contact, DomHead } from "../components";
import BlogPosts from "../components/Blogs/BlogPosts";
import { useEffect } from "react";
import Aos from "aos";

export default function HomePage() {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  return (
    <>
      {" "}
      <DomHead />
      <Hero />
      <Intro />
      <Projects />
      <BlogPosts />
      <Contact />
    </>
  );
}
