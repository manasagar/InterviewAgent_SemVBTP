import Link from "next/link";
import Navbar from "../components/Navbar";

export default function APIPage() {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-4xl font-bold mb-6">API Documentation</h1>
          <p className="text-lg mb-8">
            Explore our comprehensive API documentation and learn how to
            integrate our platform into your systems.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Authentication",
                description:
                  "Learn how to authenticate your API calls securely.",
                link: "/api/authentication",
              },
              {
                title: "Endpoints",
                description:
                  "Explore all available API endpoints and learn how to use them.",
                link: "/api/endpoints",
              },
              {
                title: "Rate Limits",
                description:
                  "Understand our API rate limits and how to work within them.",
                link: "/api/rate-limits",
              },
              {
                title: "Error Codes",
                description:
                  "Get information on possible API error codes and their resolutions.",
                link: "/api/error-codes",
              },
            ].map((apiDoc) => (
              <div
                className="bg-gray-100 p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
                key={apiDoc.title}
              >
                <h3 className="text-xl font-semibold mb-4">{apiDoc.title}</h3>
                <p className="text-gray-600 mb-6">{apiDoc.description}</p>
                <Link
                  href={apiDoc.link}
                  className="text-blue-500 hover:underline"
                >
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
