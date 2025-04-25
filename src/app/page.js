
import About from "@/Components/about";
import Banner from "@/Components/banner";
import BlogSection from "@/Components/BlogSection";
import ContactSection from "@/Components/contact";
import ProjectSection from "@/Components/ProjectSection";
import SkillSection from "@/Components/skill";
import WhatsAppButton from "@/Components/WhatsAppButton";



export default function Home() {
  return (
    <div >
      <main >
    
        <Banner />
        <About />
        <ProjectSection />
        <BlogSection />
        <SkillSection />
        <ContactSection />
        <WhatsAppButton />
      </main>
    </div>
  );
}
