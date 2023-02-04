import React, { Component, useEffect, useRef, useState } from "react";
import { productTypings } from "../../../models";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
interface internalDataItem {
  title: string;
  data: Array<productTypings>;
}

interface internalDataProps {
  product: internalDataItem;
}

export const SpecialProduct: React.FC<internalDataProps> = ({ product }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex(
      currentIndex + 3 >= product.data.length ? 0 : currentIndex + 3
    );
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex - 3 < 0 ? currentIndex + 3 : currentIndex - 3);
  };

  console.log();

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-7">
        <h1 className="text-black font-extrabold text-xl">{product.title}</h1>
        <div className="button">
          <button onClick={handlePrev} className="border-2 rounded-md p-2">
            <GrFormPrevious />
          </button>
          <button onClick={handleNext} className="border-2 rounded-md p-2 ml-4">
            <GrFormNext />
          </button>
        </div>
      </div>
      <div
        className="flex flex-col"
        style={{ whiteSpace: "nowrap" }}
        ref={sliderRef}
      >
        {product.data
          .slice(currentIndex, currentIndex + 3)
          .map((item, index) => {
            console.log(item);
            return (
              <div
                key={index}
                className="flex gap h-[100px] gap-5 mb-4"
                style={{ width: "33.33%" }}
              >
                <img
                  src={`http://localhost:8080/${item.image}`}
                  alt={item.name}
                />
                <div className="content">
                  <h1 className="text-gray-600 font-extrabold">{item.name}</h1>
                  <h3 className="font-extrabold text-black text-xl">
                    {item.price}
                  </h3>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
