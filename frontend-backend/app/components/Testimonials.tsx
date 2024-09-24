"use client"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "This platform completely changed the way we conduct interviews. The realism is unmatched.",
    author: "John Doe, HR Manager",
  },
  {
    quote:
      "The AI-powered scoring system has made our recruitment process much more transparent and fair.",
    author: "Jane Smith, Tech Lead",
  },
  {
    quote:
      "An innovative solution that saved us time and improved our candidate experience.",
    author: "Alice Johnson, Recruiter",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="relative">
          <div className="flex justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                className={`p-6 bg-white shadow-md rounded-lg transition-all transform ${
                  index === currentIndex ? "block" : "hidden"
                }`}
                key={index}
              >
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <h4 className="font-bold">- {testimonial.author}</h4>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center">
            <Button variant="outline" onClick={handlePrev}>
              <ArrowLeft />
            </Button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <Button variant="outline" onClick={handleNext}>
              <ArrowRight />
            </Button>
          </div>
          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
