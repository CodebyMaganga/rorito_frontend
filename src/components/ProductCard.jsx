import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils";
import { useCart } from "./CartContext";

const ProductCard = ({
  filteredProduct,

  displayedProducts,

  currentPage,

  productsPerPage,
  paginate,
}) => {
  const { addToCart, cart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    console.log(cart);
  };

  return (
    <div className="mt-10 bg-[#F4F4F8]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="max-w-sm rounded overflow-hidden shadow-lg mt-6"
          >
            <img
              className="w-full h"
              src={product.image_url}
              alt={product.name}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
                <a href="#">{product.name}</a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg  text-gray-900 dark:text-white">
                  Ksh{product.price}
                </span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-4 mb-12">
        {Array.from({
          length: Math.ceil(filteredProduct.length / productsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-md ${
              currentPage === index + 1
                ? "bg-gray-900 text-white"
                : "bg-gray-300 text-gray-500 hover:bg-gray-400"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
