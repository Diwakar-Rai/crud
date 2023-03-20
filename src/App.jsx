import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/navbar/Navbar";
import Product from "./components/products/Product";
import Home from "./pages/Home";
import AddProduct from "./components/products/AddProduct";
import AllProduct from "./components/products/AllProduct";
import UpdataProduct from "./components/products/UpdataProduct";
import PageNotFound from "./pages/PageNotFound";
import ProductDashboard from "./components/products/ProductDashboard";


const App = () => {
  return (
    <section id="mainContainer">
      <article>
        <Router>
          <Navbar />
          <ToastContainer theme="dark"/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-dashboard" element={<ProductDashboard />}>
              <Route path="all-product" index element={<AllProduct/>}/>
              <Route path="add-product" element={<AddProduct />} />
              {/* <Route path=":id" element={<Product />} /> */}
              <Route path="products/:id" element={<Product />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </article>
    </section>
  );
};

export default App;
