// components/Product.js
import React from 'react';

function Product({ product, addToCart }) {
  return (
    <div className="w-72 rounded-lg shadow-lg overflow-hidden mx-4">
      <img src={product.image} alt={product.title} className="w-full" />
      <div className="p-4">
        <h2 className="font-bold text-lg">{product.title}</h2>
        <p className="mt-2">{product.description}</p>
        <p className="mt-2 font-bold">${product.price}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
