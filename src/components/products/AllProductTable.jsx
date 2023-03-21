import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { axiosInstance } from "../../axios/AxiosInstance";
import ProductTable from "./ProductTable";
const AllProductTable = () => {
  let [products, setProducts] = useState([]);
  // let [loading, setLoading] = useState(false);
  useEffect(() => {
    let fetchProduct = async () => {
      try {
        let { data } = await axiosInstance.get("/products");
        console.log(data)
        setProducts(data);
      } catch (error) {
        toast.error(error);
      }
    };

    fetchProduct();
  }, []);
  return (
    <section className="container">
      <table className="table table-hover table-bordered table-responsive">
        <thead className="table-dark">
          <tr>
            <th>Photo</th>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0
            ? products?.map(product => {
                return <ProductTable key={product.id} {...product} />;
              })
            : "...loading"}
        </tbody>
      </table>
    </section>
  );
};

export default AllProductTable;
