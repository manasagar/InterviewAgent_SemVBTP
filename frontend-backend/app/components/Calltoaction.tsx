import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white py-16">
      <div className="absolute inset-0 bg-opacity-60"></div>

      <div className="relative container mx-auto text-center px-6 lg:px-12">
        {/* Call-to-Action Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Ready to Experience the Future of Interviews?
        </h2>

        {/* Call-to-Action Subtext */}
        <p className="text-lg md:text-xl mb-10">
          Transform your recruitment process with our virtual interview system.
          Sign up today to explore cutting-edge technology!
        </p>

        {/* Call-to-Action Button */}
        <Link
          href="/signup"
          className="inline-block bg-white text-indigo-600 font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-300 text-lg"
        >
          Sign Up Now
        </Link>

        {/* Background Pattern */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 h-24 w-24 bg-white opacity-30 rounded-full animate-bounce"></div>
        <div className="absolute -bottom-20 right-16 h-12 w-12 bg-indigo-400 opacity-20 rounded-full"></div>
      </div>
    </section>
  );
}
