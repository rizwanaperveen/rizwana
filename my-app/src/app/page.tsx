import React from 'react';
import About from './about/page';
import Contact from './contact/page';
import Projects from './projects/page';
import Hero from '../components/Hero'; 

export default function Home() {
  return (
    <div>
         <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
