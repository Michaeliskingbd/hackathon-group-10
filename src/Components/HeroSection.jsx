import React from "react";

const HeroSection = () => (
  <section className="relative bg-[#def1ef] text-center py-32 mt-16">
    {/* Logo in the top-left corner */}
    <img
      src="https://websitedemos.net/saas-app-company-04/wp-content/uploads/sites/1180/2025/08/Logo.svg"
      alt="logo"
      className="absolute top-8 left-8 w-32 md:w-40"
    />

    {/* Centered content */}
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-[#31587C] mb-4">About Us</h2>
      <p className="text-gray-500 text-lg">
        We are a leading SaaS App Company providing innovative, reliable, and
        user-friendly software solutions for businesses of all sizes.
      </p>
    </div>
  </section>
);

export default HeroSection;
