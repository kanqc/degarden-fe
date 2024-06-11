import React from "react";
import { ProductApi } from "@/lib/product/index";
import ProductCard from "./ProductCard";
import queryString from "query-string";

const getAllProduct = async () => {
  const searchOptions = {};
  const productRes = await ProductApi.getAll(
    queryString.stringify(searchOptions),
  );
  return productRes?.data;
};
async function ProductList() {
  const datas = await getAllProduct();
  return (
    <div className="mx-[60px]">
      <div className="-ml-[20px]">
        <div className="flex flex-row flex-wrap">
          {datas.map((data) => {
            return <ProductCard product={data} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
