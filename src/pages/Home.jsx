import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Projects from "../components/Projects"
import Services from "../components/Services"
import SkillSet from "../components/SkillSet"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <>
    <Header />
    <main className="bg-primary-dark">
        <About />
        <SkillSet />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
    </main>
    <Footer />
    </>
  )
}

export default Home