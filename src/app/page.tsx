import Footer from "@/components/Footer";
import IntroSection from "@/components/IntroSection";
import ProjectSections from "@/components/ProjectSections";
import WorkTogetherSection from "@/components/WorkTogetherSection";

export default function Home() {
  return (
    <main className="mx-auto lg:w-8/12 w-11/12 pt-20 bg-white lg:px-20 px-10 rounded-[8rem] shadow-2xl border-t-8 border-pink-400">
      <IntroSection />
      <WorkTogetherSection />
      <ProjectSections />
      <WorkTogetherSection />
      <Footer />
    </main>
  );
}
