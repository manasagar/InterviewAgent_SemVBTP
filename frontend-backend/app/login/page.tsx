import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <div className="">
      <Navbar />
      <div className="flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
          <h2 className="text-center text-2xl font-bold">Sign In</h2>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" value="true" />
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <Link href="/candidate/dashboard">
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring"
                >
                  Sign In
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
