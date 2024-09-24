"use client"
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [backgroundImage, setBackgroundImage] = useState(
    "/public/images/image1.jpg"
  );

  useEffect(() => {
    // Optionally, use an array of images for dynamic hero background transitions
    const images = [
      "/public/images/image1.jpg",
      "/public/images/image1.jpg",
      "/public/images/image1.jpg",
    ];
    let currentIndex = 0;

    const interval = setInterval(() => {
      setBackgroundImage(images[currentIndex]);
      currentIndex = (currentIndex + 1) % images.length;
    }, 5000); // Switch image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-cover bg-center flex items-center justify-center bg-bg-i1">
      {/* Overlay */}

      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          The Future of{" "}
          <span className="text-blue-500">Virtual Interviews</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-8">
          Transform your recruitment process with immersive AR/VR and AI-powered
          insights, providing a real-life boardroom experience.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4">
          <Button
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-lg px-6 py-3 rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-800 transition duration-300"
            asChild
          >
            <a href="/login">Get Started</a>
          </Button>
          <Button
            variant="outline"
            className="text-lg px-6 py-3 rounded-full text-black hover:bg-white hover:text-gray-900 transition duration-300"
          >
            <a href="/learn-more">Learn More</a>
          </Button>
        </div>
      </div>

      {/* Decorative Waves or Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,128L48,133.3C96,139,192,149,288,176C384,203,480,245,576,266.7C672,288,768,288,864,250.7C960,213,1056,139,1152,128C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
