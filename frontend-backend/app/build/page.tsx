import Link from "next/link";
import Navbar from "../components/Navbar";

export default function BuildPage() {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-4xl font-bold mb-6">Build With Our Platform</h1>
          <p className="text-lg mb-8">
            Access our SDKs, developer tools, and comprehensive guides to start
            building with our API and integrating with our platform.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SDKs",
                description:
                  "Download SDKs for various programming languages to get started quickly.",
                link: "/build/sdks",
              },
              {
                title: "Developer Tools",
                description:
                  "Utilize our developer tools to test API endpoints, create projects, and more.",
                link: "/build/tools",
              },
              {
                title: "Integration Guide",
                description:
                  "Follow our detailed guide to integrate the platform into your existing systems.",
                link: "/build/integration-guide",
              },
            ].map((tool) => (
              <div
                className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
                key={tool.title}
              >
                <h3 className="text-xl font-semibold mb-4">{tool.title}</h3>
                <p className="text-gray-600 mb-6">{tool.description}</p>
                <Link
                  href={tool.link}
                  className="text-blue-500 hover:underline"
                >
                  Get started →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
