import React from "react";

import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";

import Products from "../components/Products";
import UpdatedNavbar from "../Components/UpdatedNavbar";
import Activities from "../Components/Activities";

const Home = () => {
  return (
    <section>
      <HeroSection />
      <Activities />
      <Products />
      <Footer />
    </section>
  );
};

export default Home;
