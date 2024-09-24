import Link from "next/link";
import Navbar from "../components/Navbar";

export default function DiscoverPage() {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-4xl font-bold mb-6">
            Discover How We’re Transforming Interviews
          </h1>
          <p className="text-lg mb-8">
            Learn how our platform is used by top organizations to streamline
            their recruitment processes with cutting-edge technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Case Study: Tech Innovators",
                description:
                  "How Tech Innovators streamlined their interview process with our AR/VR solution.",
                link: "/discover/tech-innovators",
              },
              {
                title: "Customer Story: FinCorp",
                description:
                  "How FinCorp improved recruitment transparency and reduced bias using AI-powered analytics.",
                link: "/discover/fin-corp",
              },
            ].map((story) => (
              <div
                className="bg-gray-100 p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
                key={story.title}
              >
                <h3 className="text-xl font-semibold mb-4">{story.title}</h3>
                <p className="text-gray-600 mb-6">{story.description}</p>
                <Link
                  href={story.link}
                  className="text-blue-500 hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
