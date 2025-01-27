import Navbar from '../components/navbar';
import ContactMe from '../components/contactMe';
import Education from '../components/education';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Intro from '../components/intro';
// import Footer from '../components/footer';
import Footer from '../components/Footer'
 
export default function Home() {
  return (
    <div className="bg-cover bg-center min-h-screen scroll-smooth">
      <Navbar />
      <section id="intro">
        <Intro />
      </section>
      
    
      <section id="education">
        <Education />
     </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact-me">
        <ContactMe />
      </section>
      <section id='footer'>
        <Footer/>
      </section>
    </div>
  );
}
