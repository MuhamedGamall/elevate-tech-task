// src/pages/Home.js
import React from "react";
import ProductList from "../components/product-list";

function Home() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Product Listing</h1>
      <ProductList />
    </div>
  );
}

export default Home;
