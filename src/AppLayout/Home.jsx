import React from 'react'
import '../index.css'
import Hero from '../Components/Hero'
import ClientSlider from '../Components/ClientSlider'
import About from '../Components/About'
import MyServices from '../Components/MyServices'
import HireMe from '../Components/HireMe'
import OurWork from '../Components/OurWork'
import Contact from '../Components/Contact'
import Footer from './Footer'
import Testimonials from '../Components/Testimonials'
import SkillsWorks from '../Components/SkillsWorks'

const Home = () => {
  return (
    <div className='w-full bg-themebg overflow-x-hidden'>
      <Hero/>
      <ClientSlider/>
      <About/>
      <MyServices/>
      <HireMe/>
      <SkillsWorks/>
      <OurWork/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
