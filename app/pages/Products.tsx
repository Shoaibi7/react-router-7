import { useEffect, useState } from "react";
import Loader from "~/components/Loader";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-gray-300 text-center mb-12">
        🛍️ Our Products 🛒
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              className="w-full h-64 object-contain p-4"
              src={product.image}
              alt={product.title}
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                {product.title}
              </h3>
              <p className="text-purple-600 font-bold mb-4">${product.price}</p>
              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 rounded-md hover:opacity-90 transition duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
