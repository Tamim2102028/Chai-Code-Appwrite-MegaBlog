const Loader = ({ message = "Loading..." }) => {
  return (
    <div className="min-h-screen bg-red-100 flex flex-col items-center justify-center">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      {message && <div className="mt-3 text-xl font-medium text-gray-600">{message}</div>}
    </div>
  );
};

export default Loader;
