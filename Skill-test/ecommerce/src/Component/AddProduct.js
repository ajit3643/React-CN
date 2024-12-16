import React from "react";
//get styled components
import styled from "styled-components";
//get actions from redux
import { addproducts } from "../actions";
//get selector and action hooks from redux
import { useSelector, useDispatch } from "react-redux";
//get navigation hooks
import { useNavigate } from "react-router-dom";
//get toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showToastMessage } from "../Notification/notify";
//get react hooks
import { useState } from "react";
const Container = styled.div`
  width: 50%;
  margin: auto;
  @media only screen and (max-width: 976px) {
    width: 90%;
  }
  @media only screen and (max-width: 576px) {
    width: 100%;
    margin: 0;
  }
`;

const AddProduct = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [thumbnail, setthumbmail] = useState("");
  const [rating, setrating] = useState("");
  //on submit add a product
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      addproducts([
        {
          id: products.length + 1,
          title: name,
          price,
          category,
          thumbnail,
          rating,
          description,
          edit: true,
        },
        ...products,
      ])
    );
    navigate("/");
    // });
    showToastMessage("Product Added Successful", "success");
    setname("");
    setcategory("");
    setdescription("");
    setrating("");
    setthumbmail("");
    setprice("");
  }
  return (
    // container
    <Container className="bg-light border border-1 border-dark mt-4 p-3 ">
      <ToastContainer />
      <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="p-2"
          placeholder="Name"
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="text"
          className="p-2"
          placeholder="Descriptions"
          onChange={(e) => setdescription(e.target.value)}
        />
        <input
          type="text"
          className="p-2"
          placeholder="Price"
          onChange={(e) => setprice(e.target.value)}
        />
        <input
          type="text"
          className="p-2"
          placeholder="category"
          onChange={(e) => setcategory(e.target.value)}
        />
        <input
          type="text"
          className="p-2"
          placeholder="Thumbnail image Url"
          onChange={(e) => setthumbmail(e.target.value)}
        />
        <input
          type="text"
          className="p-2"
          placeholder="ratings"
          onChange={(e) => setrating(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary align-self-end mt-4"
          style={{
            width: "9rem",
            backgroundColor: "var(--nav)",
          }}
        >
          Add to Cart
        </button>
      </form>
    </Container>
  );
};
export default AddProduct;
