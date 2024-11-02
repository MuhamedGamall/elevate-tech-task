import React, { useState } from "react";
import ProductModal from "./product-modal";

function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Disable background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Re-enable background scrolling
  };

  return (
    <>
      <div
        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
        onClick={openModal}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-700 mb-4 line-clamp-2">{product.description}</p>
        <p className="text-gray-500 mb-2">${product.price}</p>
        <div className="flex items-center">
          <span className="text-yellow-500">⭐</span>
          <p className="ml-1">{product.rating.rate}</p>
        </div>
      </div>

      {isModalOpen && <ProductModal product={product} onClose={closeModal} />}
    </>
  );
}

export default ProductCard;
