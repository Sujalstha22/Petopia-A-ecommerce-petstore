import React from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-100 px-4 text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="mt-4 text-2xl text-gray-800 font-semibold">
        Page Not Found
      </p>
      <p className="mt-2 text-gray-600">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <button
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back Home
      </button>
    </div>
  );
};

export default Notfound;
