import './App.css'
import ExplorationBar from './components/explorationBar/explorationBar'
import Footer from './components/footer/footer'
import Funbar from './components/funbar/funbar'
import HeroCarousel from './components/heroCarousal/heroCarousal'
import Navbar from './components/navbar/navbar'
import ServicesSection from './components/servicesSection/servicesSection'
import WorkProcess from './components/workProcess/workProcess'

function App() {

  return (
    <>
      <ExplorationBar />
      <Navbar />
      <HeroCarousel />
      <Funbar />
      <ServicesSection />
      <WorkProcess />
      <Funbar />
      <Footer />
    </>
  )
}

export default App
