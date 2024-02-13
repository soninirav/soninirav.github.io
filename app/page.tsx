import Header from "./_header/page";
import Resume from "./_resume/page";
import Skills from "./_skills/page";

export default function Home() {
  return (
    <>
      <Header />
      <Skills />
      <Resume />
      {/* <main className="">Hi</main>
      <footer>Footer</footer> */}
    </>
  );
}
