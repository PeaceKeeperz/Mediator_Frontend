import Head from 'next/head'
import Image from 'next/image'
import About from '../components/about/About'
import Hero from '../components/HeroSection/Hero'
import Process from '../components/Process/Process'
import Want from '../components/Want/Want'
import When from '../components/When/When'

export default function Home() {
  return (
    <div>
      <Hero/>
       <About/>
       <When/>
       <Process/>
       <Want/>
      </div>
  )
}
