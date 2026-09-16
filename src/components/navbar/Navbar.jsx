import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-indigo-600 rounded-md flex items-center justify-center">
              <FontAwesomeIcon icon={faBolt} className="w-4 h-4 text-white"/>
          </div>
          <span className="font-semibold text-gray-900 text-lg tracking-tight">Shoply</span>
        </div>

        <div className="hidden sm:flex items-center gap-6">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">Products</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">About</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">Blog</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">Contact</a>
        </div>

        <button className="text-sm font-medium bg-indigo-600 text-white px-4 py-1.5 rounded-lg hover:bg-indigo-700 transition-colors">Sign in</button>
      </div>
    </nav>
  );
}
