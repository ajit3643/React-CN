//get all components
import Nav from "./Component/Nav";
import ProductDetail from "./Component/ProductDetail";
import AddProduct from "./Component/AddProduct";
import CartItems from "./Component/CartItems";
import ProductItemList from "./Component/ProductItemList";
//get all router components
import { BrowserRouter, Routes, Route } from "react-router-dom";
//get redux hooks
import { useSelector, useDispatch } from "react-redux";
//get redux actions
import { addproducts } from "./actions/index";
//get custom hooks
import customFetch from "./apiCall";
//get react hooks
import { useEffect } from "react";
//get react helmet hooks
import { Helmet } from "react-helmet";

const App = () => {
  let productDetailItem = useSelector((state) => state.itemToDisplay);

  const url = "https://dummyjson.com/products";

  const dispatch = useDispatch();

  useEffect(() => {
    let response = customFetch(url, {
      method: "GET",
    });
    response.then((data) => {
      let modifiedData = data.products.map((item) => {
        item.edit = true;
        return item;
      });
      window.localStorage.setItem("products", JSON.stringify(modifiedData));
      let products = JSON.parse(window.localStorage.getItem("products"));
      dispatch(addproducts(products));
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>E-comm</title>
        <meta
          name="description"
          content="It is a simple ecommerce application handle add to cart, delete from cart, add item, delete item and update item"
        />
      </Helmet>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<ProductItemList />} />
          <Route path="/addproducts" element={<AddProduct />} />
          <Route
            path={`/productdetails/${productDetailItem.id}`}
            element={<ProductDetail item={productDetailItem} />}
          />
          <Route path="/cart" element={<CartItems />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
