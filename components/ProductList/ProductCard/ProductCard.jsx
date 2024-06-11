import React from "react";
import { Tinos } from "next/font/google";

const tinos = Tinos({
  weight: ["400", "700"],
  subsets: ["latin", "vietnamese"],
});
function ProductCard({ product }) {
  const moneyFormatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
  });
  return (
    <>
      <div className="group mb-5 ml-[20px] flex w-[calc(25%-20px)] flex-col ">
        <div className="">
          <img
            src={`${product.images[0]}`}
            alt={product.name}
            className="mx-auto h-96 shrink-0 transition-all duration-300 group-hover:scale-110"
          />
        </div>
        <div className="mt-0 flex flex-1 flex-col justify-center tracking-widest transition-all duration-300 group-hover:mt-5 ">
          <p className="text flex-1 self-center break-words text-center ">
            {product.name}
          </p>
          <div className=" self-center">
            {moneyFormatter.format(product.price)}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
