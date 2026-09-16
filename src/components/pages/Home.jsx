import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Product from "./product";
import { useState } from "react";
import Empty from "./Empty";

export default function Home() {
  const data = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Premium sound quality with 30-hour battery life.",
      price: 149.99,
      rating: 5,
      reviews: 284,
      badge: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    },
    {
      id: 2,
      name: "Leather Watch",
      description:
        "Crafted from genuine Italian leather with sapphire crystal.",
      price: 219.0,
      rating: 4,
      reviews: 157,
      badge: "New",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      description: "Waterproof IPX7, 360° sound, built for adventure.",
      price: 89.95,
      rating: 4,
      reviews: 412,
      badge: null,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
    },
    {
      id: 4,
      name: "Desk Lamp",
      description: "Adjustable color temperature and USB-C charging port.",
      price: 64.0,
      rating: 5,
      reviews: 96,
      badge: null,
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80",
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      description: "Compact TKL layout, Cherry MX switches, RGB lighting.",
      price: 129.99,
      rating: 5,
      reviews: 531,
      badge: "Popular",
      image:
        "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&q=80",
    },
    {
      id: 6,
      name: "Smart Water Bottle",
      description: "Tracks hydration goals, LED reminders, 24h cold.",
      price: 45.5,
      rating: 4,
      reviews: 73,
      badge: null,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
    },
  ]
  const [products, setProducts] = useState(data);

  const [current ,setCorrent] = useState(products.length)
  const [total ,setTotal] = useState(products.length)


  function deletProduct(id) {
    let copyProduct = structuredClone(products);
    let newProduct = copyProduct.filter((product) => {
      return product.id !== id;
    });

    setProducts(newProduct);
    setCorrent(newProduct.length);
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-1">
            Featured
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Our Products</h2>
          <p className="text-sm text-gray-500 mt-1">
            {current} of {total} items shown
            {current < total && <span className="text-gray-400"> — refresh to restore all</span>}
            
          </p>
        </div>
        <button className="text-sm text-gray-500 hover:text-indigo-600 font-medium flex items-center gap-1.5 transition-colors" onClick={() => {setProducts(data) ;setCorrent(data.length)}}>
          <span className="w-4 h-4">
            <FontAwesomeIcon icon={faRotate} />
          </span>
          Restore all
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((currentProduct) => {
          return (
            <Product product={currentProduct} deletProduct={deletProduct} />
          );
        })}
      </div>

      {current == 0 ? <Empty data={data} setCorrent={setCorrent} setProducts={setProducts}/> : ""}
    </main>
  );
}
