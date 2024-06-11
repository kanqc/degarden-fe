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
async function ProductList(props) {
  const datas = await getAllProduct();

  return (
    <div>
      <ProductCard products={datas} />
    </div>
  );
}

export default ProductList;
