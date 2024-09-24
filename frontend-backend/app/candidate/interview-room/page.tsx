"use client"
import { useState } from "react";

export default function InterviewRoom() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [feedback, setFeedback] = useState("");

  const submitInterview = () => {
    // Handle the question/response submission logic here
    setFeedback("Relevancy Score: 85%");
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold text-center">
          Virtual Interview Room
        </h2>

        <div>
          <label className="block text-gray-700">Expert Question</label>
          <textarea
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700">Candidate Response</label>
          <textarea
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
          ></textarea>
        </div>

        <button
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={submitInterview}
        >
          Submit
        </button>

        {feedback && (
          <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg">
            {feedback}
          </div>
        )}
      </div>
    </div>
  );
}
