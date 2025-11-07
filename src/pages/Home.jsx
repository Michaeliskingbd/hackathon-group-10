import React from 'react'

import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Activities from '../components/Activities'
import Products from '../components/Products'
import UpdatedNavbar from '../Components/UpdatedNavbar'

const Home = () => {
  return (
    <section>
    <div>
      <UpdatedNavbar/>
        <HeroSection />
        <Activities />
        <Products />
    </div>

    </section>

  )
}

export default Home