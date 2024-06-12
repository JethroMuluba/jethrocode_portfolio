import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Realisations from './components/Realisations'
import WorkExperiences from './components/WorkExperiences'
import ContactMe from './components/ContactMe'

function App() {

  return (
<body>
    <Header/>
    <main className=' absolute top-[55px]'>
      <Hero/>
      <AboutMe/>
      {/* <Skills/> */}
      <Realisations/>
      <WorkExperiences/>
      <ContactMe/>
    </main>
</body>
  )
}

export default App
