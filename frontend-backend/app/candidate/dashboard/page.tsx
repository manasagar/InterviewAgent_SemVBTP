import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl text-black font-bold mb-6">
          Scheduled Interviews
        </h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-700">No interviews scheduled.</p>
          <Link
            href="/candidate/interview-room"
            className="mt-4 inline-block text-blue-500 underline"
          >
            Start New Interview
          </Link>
        </div>
      </div>
    </div>
  );
}
