
 import React from "react";
 
 const Footer = () => {
   return (
     <footer className="bg-gray-900 text-gray-300 py-12 px-6"> 
     <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10"> <div> 
      <h4 className="text-white font-bold mb-4">Menu</h4> 
      <ul className="space-y-2"> 
        <li><a href="/" className="hover:text-indigo-400">Home</a></li> 
        <li><a href="/about" className="hover:text-indigo-400">About Us</a></li> 
        <li><a href="/products" className="hover:text-indigo-400">Products</a></li> 
        <li><a href="/features" className="hover:text-indigo-400">Features</a></li> 
        <li><a href="/contact" className="hover:text-indigo-400">Contact</a></li> </ul> </div> 
        <div> 
          <h4 className="text-white font-bold mb-4">Quick Links</h4> 
          <ul className="space-y-2"> <li><a href="#" className="hover:text-indigo-400">Blog</a></li> 
          <li><a href="#" className="hover:text-indigo-400">Support</a></li> 
          <li><a href="#" className="hover:text-indigo-400">Careers</a></li> 
          <li><a href="#" className="hover:text-indigo-400">Privacy Policy</a></li> 
          </ul> 
          </div> <div> <h4 className="text-white font-bold mb-4">Contact</h4> 
          <p>56 Hendford Rd,<br />Warwickshire, BH10 5AU</p> 
          <p className="mt-2">contact@info.com</p> <p>01202 511337</p> 
          </div> 
          <div className="sm:col-span-2 md:col-span-1 md:col-start-4"> 
            <h4 className="text-white font-bold mb-4">About</h4> 
            <p className="text-sm text-gray-400"> We are a leading SaaS App Company providing reliable solutions that help businesses scale with ease. </p> 
            </div> 
            </div> 
            <div className="text-center border-t border-gray-700 mt-10 pt-6 text-sm text-gray-500"> Copyright © 2025 SaaS App Company | Powered by SaaS App Company 
              </div> 
              </footer>
   );
 };
 
 export default Footer;

