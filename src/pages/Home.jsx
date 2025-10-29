import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Activities from '../components/Activities'
import Products from '../components/Products'

const Home = () => {
  return (
    <section>
    <div>
        <NavBar />
        <HeroSection />
        <Activities />
        <Products />
    </div>

    </section>
  )
}

export default Home