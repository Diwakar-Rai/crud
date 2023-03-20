import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { faker } from "@faker-js/faker";
import Styles from "./_product.module.css";
import { axiosInstance } from "../../axios/AxiosInstance";
const Product = () => {
  let { id } = useParams();
  let [product, setProduct] = useState("");
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    let fetchProduct = async () => {
      try {
        let { data } = await axiosInstance.get(`/products/${id}`);
        setLoading(true);
        setProduct(data);
        console.log(data)
      } catch (error) {
        toast.error(error);
      }

      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  return <section className={Styles.product}>
    <article>
      {loading === true ? ("loading...") : (
        <aside>
          <div className={Styles.photo}>
            <figure>
              <img src={faker.image.business()} alt={product.title} />
            </figure>
          </div>

          <div className={Styles.description}>
            <main>
              <h1>{product.title}</h1>
              <p>Price: &#8377;{product.price}</p>
              <p>{product.description}</p>
              <p>Rating: {product.rating}</p>
              <p>Category: { product.category }</p>
            </main>
          </div>
        </aside>
      )}
    </article>
  </section>;
};

export default Product;
