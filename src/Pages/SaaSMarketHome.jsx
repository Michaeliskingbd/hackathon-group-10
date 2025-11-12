import React from 'react'
import NavBar from '../components/NavBar'                                                                                                                             
import MarketPlace from '../components/MarketPlace'
import Footer from '../components/Footer'
const SaaSMarketHome = () => {
  return (
    <div>
      <NavBar />
      <h1>SaaS Market Home</h1>
      <p>Welcome to the SaaS Market Home page!</p>
      <MarketPlace />
      <Footer />
    </div>
  )
}

export default SaaSMarketHome