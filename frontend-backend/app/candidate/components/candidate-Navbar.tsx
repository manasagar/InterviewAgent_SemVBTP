"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

  // Check if the current path includes '/candidate'
  const pathname = usePathname();
  const shouldShowNavbar = pathname.includes("/candidate");

  if (!shouldShowNavbar) return null; // Don't render the Navbar if condition is not met

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-12">
        <Link
          href="/candidate/dashboard"
          aria-label="Dashboard"
          className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition duration-300"
        >
          Interview System
        </Link>


        <div className="space-x-6">
          <Link
            href="/candidate/profile"
            aria-label="Profile"
            className="text-gray-600 hover:text-blue-500 transition duration-300"
          >
            Profile
          </Link>
          <Link
            href="/candidate/report"
            aria-label="Profile"
            className="text-gray-600 hover:text-blue-500 transition duration-300"
          >
            Report
          </Link>
          <Link
            href="/login"
            aria-label="Logout"
            className="text-white bg-blue-500 hover:bg-blue-600 transition duration-300 px-4 py-2 rounded-md"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}
