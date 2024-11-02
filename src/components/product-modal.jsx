// src/components/ProductModal.js
import React from "react";

function ProductModal({ product, onClose }) {
  const handleOverlayClick = (e) => {
    // Close modal only if the user clicks outside the content area
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative  max-h-[700px] overflow-y-auto">
        <button
          className="absolute top-4 bg-slate-100 p-2 flex items-center  justify-center rounded-full w-8 h-8 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-contain rounded-lg mt-8 mb-4"
        />
        <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-gray-900 font-bold mb-2">${product.price}</p>
        <div className="flex items-center">
          <span className="text-yellow-500">⭐</span>
          <p className="ml-1">
            {product.rating.rate} ({product.rating.count} reviews)
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
