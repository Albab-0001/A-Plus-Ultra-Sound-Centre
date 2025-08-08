
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! Page not found</p>
        <Link
          to="/"
          className="gradient-gold text-gray-800 px-8 py-3 rounded-lg text-lg font-bold inline-block transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
