import Link from "next/link";
import Navbar from "../components/Navbar";

export default function DocsPage() {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-4xl font-bold mb-6">Documentation</h1>
          <p className="text-lg mb-8">
            Learn everything you need to know about using our platform. Find
            detailed guides, tutorials, and best practices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Getting Started",
                description:
                  "Quickly get started with our platform and begin building your first project.",
                link: "/docs/getting-started",
              },
              {
                title: "API Reference",
                description:
                  "Explore the full API reference and understand how to make API calls.",
                link: "/docs/api-reference",
              },
              {
                title: "Guides",
                description:
                  "Step-by-step guides to help you through common use cases.",
                link: "/docs/guides",
              },
            ].map((doc) => (
              <div
                className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
                key={doc.title}
              >
                <h3 className="text-xl font-semibold mb-4">{doc.title}</h3>
                <p className="text-gray-600 mb-6">{doc.description}</p>
                <Link href={doc.link} className="text-blue-500 hover:underline">
                  Read more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
