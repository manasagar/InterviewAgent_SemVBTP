import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 mb-8">
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-12">
        {/* Logo Section */}
        <Link
          href="/"
          aria-label="Home"
          className="text-2xl font-bold text-blue-600"
        >
          Interview Agent
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link
            href="/docs"
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            Docs
          </Link>
          <Link
            href="/discover"
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            Discover
          </Link>
          <Link
            href="/build"
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            Build
          </Link>
          <Link
            href="/apif"
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            API
          </Link>
        </div>
      </div>
    </nav>
  );
}
