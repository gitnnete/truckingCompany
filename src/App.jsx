import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import WhoAreWe from './Components/WhoAreWe'
import Services from './Components/Services'
import Location from './Components/Location'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <WhoAreWe />
    <Services />
    <Location />
    <ContactUs />
    <Footer />
    </>
  )
}

export default App