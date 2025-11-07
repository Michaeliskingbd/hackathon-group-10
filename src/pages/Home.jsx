import React from "react";

import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Activities from "../components/Activities";
import Products from "../components/Products";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <section>
      <div>
        <NavBar />
        <HeroSection />
        <Activities />
        <Products />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
