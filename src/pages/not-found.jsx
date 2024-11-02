import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="mt-4">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <Link to="/" className="text-blue-500 mt-6 inline-block">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
