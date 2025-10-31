
import React from "react";
import { FaTwitter, FaGithub, FaLinkedin,} from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-black to-gray-950 text-gray-300 py-12 px-6 mt-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.1)_0%,_transparent_70%)]"></div>
<div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 z-10">
<div>
<h2 className="text-3xl font-bold text-white tracking-wide">BreakLoop</h2>
<p className="mt-3 text-gray-400 leading-relaxed text-sm md:text-base">
            Your digital balance companion 
            Helping you pause,and live beyond the scroll
 </p></div> <div>
<h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
<ul className="space-y-2 text-sm md:text-base">
<li><a href="#about" className="hover:text-indigo-400 transition-colors">About</a></li>
<li><a href="#features" className="hover:text-indigo-400 transition-colors">Features</a></li>
<li><a href="#dashboard" className="hover:text-indigo-400 transition-colors">Dashboard</a></li>
<li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
</ul>
 </div>
<div>
 <h3 className="text-lg font-semibold text-white mb-3">Stay Connected</h3>
<p className="text-sm text-gray-400 mb-4">Let’s build healthier tech habits together.</p>
<div className="flex space-x-5 text-2xl">
<a href="https://twitter.com" className="hover:text-indigo-400 transform hover:scale-110 transition-all duration-200">
<FaTwitter />
</a>
<a href="https://github.com" className="hover:text-indigo-400 transform hover:scale-110 transition-all duration-200">
<FaGithub />
</a>
<a href="https://linkedin.com" className="hover:text-indigo-400 transform hover:scale-110 transition-all duration-200">
<FaLinkedin />
</a>
</div>
</div>
</div>
<div className="relative mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500 z-10">
<p>
<span className="text-indigo-400 font-medium"> BreakLoop </span> Hackathon 2025 
 </p>
<p className="mt-2 text-xs text-gray-600">© {new Date().getFullYear()} BreakLoop.</p>
</div>
</footer>
  );
}

export default Footer;

