import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { ProductCardTypes } from "../../models/product";

export default function ProductCard({ item }: ProductCardTypes) {
  return (
    <div className="max-w-xs bg-white shadow-xl rounded-lg overflow-hidden my-10 cursor-pointer">
      <div className="px-4 py-2">
        <h1 className="text-gray-900 font-bold text-xl uppercase">
          {item.name}
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          This product is available in bulk
        </p>
      </div>
      <img
        className="h-[180px] w-full object-cover mt-2"
        src={`http://localhost:8080/${item.image}`}
        alt="NIKE AIR"
      />
      <div className="flex items-center justify-between px-4 py-2 bg-[#7fad39]">
        <h1 className="text-gray-200 font-bold text-xl">
          {item.currency}
          {item.price}
        </h1>
        <div className="text-sm text-gray-900 font-semibold rounded flex space-x-3 items-center">
          <AiFillHeart className="w-6 h-6 rounded-full bg-white p-1.5" />
          <FaShoppingCart className="w-6 h-6 rounded-full bg-white p-1.5" />
        </div>
      </div>
    </div>
  );
}