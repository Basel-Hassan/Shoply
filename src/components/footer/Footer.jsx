import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-indigo-600 rounded-md flex items-center justify-center">
                        <FontAwesomeIcon icon={faBolt} className="w-3.5 h-3.5 text-white"/>
                </div>
                <span className="font-semibold text-gray-800 text-sm">Shoply</span>
            </div>

            <div className="flex flex-wrap gap-5">
              <a href="#" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">Privacy</a>
              <a href="#" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">Terms</a>
              <a href="#" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">Careers</a>
              <a href="#" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">Support</a>
            </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400">© 2026 Shoply, Inc. All rights reserved.</p>
          <p className="text-xs text-gray-300">Built with React + Vite + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
