import React from "react";
//get component
import ProductItem from "./ProductItem";
import Sort from "./Sort";
//get redux hook
import { useSelector } from "react-redux";

const ProductItemList = () => {
  const data = useSelector((state) => state.products);
  if (data.length === 0) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div
          className="spinner-border"
          style={{ width: "8rem", height: "8rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="d-flex flex-column container-sm mt-4">
        <Sort />
        {data.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </div>
    );
  }
};
export default ProductItemList;
