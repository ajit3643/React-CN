//get react hooks
import React, { useState } from "react";
//get redux hook
import { useDispatch, useSelector } from "react-redux";
//get redux action
import { addproducts } from "../actions";

const Sort = () => {
  const [flag, setflag] = useState(false);
  const products = useSelector((state) => state.products);
  const dispatchSort = useDispatch();
  const dispatchCancel = useDispatch();
  //sorting in price function
  function handleSort() {
    let sortedData = products.sort((a, b) => a.price - b.price);
    dispatchSort(addproducts([...sortedData]));
    setflag(true);
  }
  // on click cancel to sort
  function cancelSort() {
    let products = JSON.parse(window.localStorage.getItem("products"));
    dispatchCancel(addproducts([...products]));
    setflag(false);
  }
  return (
    <div className="align-self-end">
      <div
        className="bg-white p-2 rounded-5  d-flex justify-content-around"
        style={style}
      >
        <span
          style={{ color: "#d44860" }}
          className="fw-bold "
          onClick={() => handleSort()}
        >
          Sort by Price
        </span>
        {flag && (
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/561/561189.png"
              alt="error"
              width={"20rem"}
              onClick={() => cancelSort()}
              style={{ cursor: "pointer" }}
            />
          </span>
        )}
      </div>
    </div>
  );
};
const style = {
  width: "9rem",
  cursor: "pointer",
};
export default Sort;
