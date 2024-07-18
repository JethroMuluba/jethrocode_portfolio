import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Services from './components/Services'
import WorkExperiences from './components/WorkExperiences'
import ContactMe from './components/ContactMe'
import ScrollToTopButton from './components/ScrollTopButton'
import Footer from './components/Footer'
import { AnimatePresence, motion } from 'framer-motion'

function App() {

  return (
    <AnimatePresence>
    <motion.body
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
        <Header/>
        <main className=' absolute top-[55px]'>
          <Hero/>
          <AboutMe/>
          {/* <Skills/> */}
          <Services/>
          <WorkExperiences/>
          <ContactMe/>
          <Footer/>
          <ScrollToTopButton/>
        </main>
    </motion.body>
    </AnimatePresence>
  )
}

export default App
