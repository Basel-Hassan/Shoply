import { faStar, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Product({product , deletProduct}) {
  let {id, name, description, price, rating, reviews, badge, image } = product;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col group hover:border-indigo-200 transition-colors">
      <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-2 right-2 w-7 h-7 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-300 transition-colors opacity-0 group-hover:opacity-100" onClick={() => deletProduct(id)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>

        {badge &&
          <span className="absolute top-2 left-2 text-xs font-medium bg-indigo-600 text-white px-2 py-0.5 rounded-full">
            {badge}
          </span>}
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-gray-900 text-sm leading-snug">
            {name}
          </h3>
          <span className="text-sm font-semibold text-indigo-600 whitespace-nowrap">
            ${price}
          </span>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed flex-1">{description}</p>

        <div className="flex items-center gap-1 mt-1">

          {Array.from({length: 5}).map((_ , index) => (
            index < rating ? 
            <FontAwesomeIcon icon={faStar} className="w-3 h-3 text-sm text-amber-400"/> :
            <FontAwesomeIcon icon={faStar} className="w-3 h-3 text-sm text-gray-200"/>
            
          ))}

          <span className="text-xs text-gray-400 ml-1">({reviews})</span>
        </div>

        <button className="mt-2 w-full text-sm font-medium text-indigo-600 border border-indigo-200 rounded-lg py-1.5 hover:bg-indigo-50 transition-colors">
          Add to cart
        </button>
      </div>
    </div>
  );
}
