import Contact from "./_contact/page";
import Header from "./_header/page";
import Project from "./_project/page";
import Resume from "./_resume/page";
import Skills from "./_skills/page";

export default function Home() {
  return (
    <>
      <Header />
      <Skills />
      <Project />
      <Resume />
      <Contact />
    </>
  );
}
