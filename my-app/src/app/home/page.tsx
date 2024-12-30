import Hero from '@/components/Hero'
import React from 'react'
import About from '../about/page'
import Projects from '../projects/page'
import Contact from '../contact/page'
import Skills from '../skills/page'

export default function Back() {
  return (
    <div>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Skills />
    </div>
  )
}
