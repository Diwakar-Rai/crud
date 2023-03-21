import React, { Fragment, useEffect, useState } from "react";
import { axiosInstance } from "../../axios/AxiosInstance";
import { faker } from "@faker-js/faker";
import Style from "./_product.module.css";
import { Link } from "react-router-dom";
const AllProduct = () => {
  let [products, setProducts] = useState([]);
  let [isAuth, setIsAuth] = useState(true);

  let deleteProduct = async id => {
    await axiosInstance.delete(`/products/${id}`);
    window.location.assign("/product-dashboard/all-product");
    // toast.success("successfully deleted the product");
  };
  useEffect(() => {
    let fetchProducts = async () => {
      try {
        let { data } = await axiosInstance.get("/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h1>List of Products</h1>
      <div className={Style.allproducts}>
        {products.length > 0
          ? products?.map(product => {
              return (
                <Fragment key={product.id}>
                  <div className={Style.content}>
                    <figure>
                      <img src={faker.image.animals()} alt="" />
                    </figure>
                    <h3>{product.title.slice(0, 20) + "..."}</h3>
                    <p>Price: &#8377;{product.price}</p>
                    <p>Category: {product.category}</p>
                    <p>{product.description.slice(0, 20) + "..."}</p>
                    <p>rating: {product.rating}</p>

                    <footer>
                      <p>
                        <a href="#">Add to Cart</a>
                      </p>
                      {isAuth === true && (
                        <p className={Style.link}>
                          <button
                            className={`${Style.deleteBtn} btn btn-danger btn-sm`}
                            onClick={() => deleteProduct(product.id)}
                          >
                            Delete
                          </button>
                          <Link
                            to={`/product-dashboard/update-product/${product.id}`}
                          >
                            Edit
                          </Link>
                        </p>
                      )}
                      <p>
                        <Link to={`/product-dashboard/products/${product.id}`}>
                          view
                        </Link>
                      </p>
                    </footer>
                  </div>
                </Fragment>
              );
            })
          : "loading..."}
      </div>
    </>
  );
};

export default AllProduct;
