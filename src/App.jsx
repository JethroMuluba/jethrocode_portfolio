import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'

function App() {

  return (
<body>
    <Header/>
    <main className=' absolute top-[60px]'>
      <Hero/>
      <AboutMe/>
    </main>
</body>
  )
}

export default App
