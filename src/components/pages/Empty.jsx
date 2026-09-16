import { faCube } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Empty({data , setProducts , setCorrent}) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <FontAwesomeIcon icon={faCube} className="w-6 h-6 text-gray-400"/>
      </div>
      <p className="font-semibold text-gray-700 mb-1">No products left</p>
      <p className="text-sm text-gray-400 mb-4">You've removed all items.</p>
      <button className="text-sm font-medium text-indigo-600 border border-indigo-200 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors" onClick={() => {setProducts(data) ;setCorrent(data.length)}}>Restore all products</button>
    </div>
  )
}
