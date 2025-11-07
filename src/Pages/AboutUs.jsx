 import React from "react"; 
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import WhoWeAre from "../Components/WhoWeAre";
import MissionValues from "../Components/MissionValues";
import History from "../Components/History";
import Team from "../Components/Team";
import CTASection from "../Components/CTASection";
import Footer from "../components/Footer";



 const About = () => { return ( 
 <div className=" bg-[#def1ef] font-sans text-[#31587C]"> 
 <Navbar /> 
 <HeroSection /> 
 <WhoWeAre />
 <MissionValues /> 
 <History /> 
 <Team /> 
 <CTASection />  
 <Footer /> 

 </div> 
 );
 }; 
 export default About;