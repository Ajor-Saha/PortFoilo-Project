import About from "../components/About"
import Contact from "../components/Contact"
import Cp from "../components/Cp"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Projects from "../components/Projects"

function Home(){
    return(
        <>
          <Hero/>
          <About/>
          <Projects/>
          <Cp/>
          <Contact/>
          <Footer/>
        </>
    )
}

export default Home