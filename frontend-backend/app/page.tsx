import Link from "next/link";
import Navbar from "./components/Navbar";
import TestimonialCarousel from "./components/Testimonials";
import HeroSection from "./components/Hero";
import FeatureSection from "./components/Feature";
import CallToActionSection from "./components/Calltoaction";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Section */}

      <Navbar />

      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* Testimonials Section */}
      <TestimonialCarousel />

      {/* Call-to-Action Section */}
      <CallToActionSection />


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 rounded-b-2xl">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <Link href="/about" className="text-gray-400 hover:text-white mx-4">
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-white mx-4"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white mx-4"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex justify-center mb-4">
            <Link href="#" className="text-gray-400 hover:text-white mx-2">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white mx-2">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white mx-2">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
          <form className="flex justify-center mb-4">
            <input
              type="email"
              placeholder="Subscribe to our newsletter"
              className="p-2 rounded-l-lg border-2 border-gray-400 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-r-lg"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Virtual Interview System. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
