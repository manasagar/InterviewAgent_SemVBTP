import Link from "next/link";
import Navbar from "./components/Navbar";
import TestimonialCarousel from "./components/Testimonials";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Section */}

      <Navbar />

      <section
        className="flex flex-col items-center justify-center flex-grow bg-cover bg-center"
        style={{ backgroundImage: 'url("/path/to/background.jpg")' }}
      >
        <div className="bg-black bg-opacity-60 p-12 rounded-lg text-center shadow-lg transform transition-transform duration-300 hover:scale-105">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Virtual Interview System
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            A next-gen interview platform that combines AR/VR and AI for a
            real-life boardroom experience.
          </p>
          <Link href="/login">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Why Choose Our Platform?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "🌟 Real-Life Experience",
              description:
                "Simulate boardroom interviews using cutting-edge AR/VR technology.",
              icon: "/path/to/icon1.svg",
            },
            {
              title: "🤖 AI-Powered Insights",
              description:
                "Utilize advanced NLP algorithms to analyze questions and responses.",
              icon: "/path/to/icon2.svg",
            },
            {
              title: "📊 Transparent Scoring",
              description:
                "Receive quantifiable scores for an unbiased selection process.",
              icon: "/path/to/icon3.svg",
            },
          ].map((feature) => (
            <div
              className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
              key={feature.title}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialCarousel />

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center py-12">
        <h2 className="text-4xl font-bold mb-6">
          Experience the Future of Interviews
        </h2>
        <p className="text-lg mb-8">
          Sign up today and see how our virtual interview system can transform
          your recruitment process.
        </p>
        <Link href="/signup">
          <button className="bg-white text-indigo-600 font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 text-lg">
            Sign Up Now
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
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
