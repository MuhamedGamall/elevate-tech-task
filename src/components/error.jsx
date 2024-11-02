function Error({ message }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h2 className="text-2xl font-semibold text-red-500">Oops! Something went wrong.</h2>
      <p className="text-gray-600 mt-2">{message || "An unexpected error occurred."}</p>
    </div>
  );
}

export default Error;
