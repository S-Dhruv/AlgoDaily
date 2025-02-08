import React from 'react'
import Navbar from './Navbar'
import Login from "./Login"
import Features from './Features'
import HowItWorks from './HowitWorks'
import Benefits from './Benefits'
import Testimonials from './Testimonials'
import Footer from './Footer'
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Login />
      <Features />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default LandingPage