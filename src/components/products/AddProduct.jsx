import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./_product.module.css";
import axios from "axios";
import {toast} from "react-toastify"
const AddProduct = () => {
  let navigate = useNavigate();
  let [state, setState] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    rating: 0,
    loading: false,
  });
  let { title, category, price, description, rating, loading } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let payload = { title, category, description, rating, price };
      await axios.post("http://localhost:5000/products", payload);
      console.log("successfully data created");
      navigate("/product-dashboard/all-product")
      toast.success("successfully products added")
    } catch (error) {
      console.log(error);
    }
    setState({
      loading: false,
      title: "",
      description: "",
      category: "",
      price: "",
      rating: 0,
    });
  };
  return (
    <section id={Styles.form}>
        <h2>Add Product</h2>
      <article>
        <form onSubmit={handleSubmit}>
          <div className={Styles.formGroup}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Enter Title"
              id="title"
              className={Styles.formControl}
              onChange={handleChange}
              required
            />
          </div>
          <div className={Styles.formGroup}>
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              value={price}
              id="price"
              placeholder="Enter Price"
              className={Styles.formControl}
              onChange={handleChange}
            />
          </div>
          <div className={Styles.formGroup}>
            <label htmlFor="rating">Rating</label>
            <input
              type="range"
              name="rating"
              className={Styles.formControl}
              id="rating"
              value={rating}
              min={0}
              max={5}
              onChange={handleChange}
            />
          </div>
          <div className={Styles.formGroup}>
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              value={category}
              onChange={handleChange}
            >
              <option value="laptop">Laptop</option>
              <option value="mobile">Mobile</option>
              <option value="tablet">Tablet</option>
              <option value="tv">TV</option>
              <option value="headphone">Head Phones</option>
            </select>
          </div>
          <div className={Styles.formGroup} id={Styles.category}>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              value={description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className={Styles.formGroup}>
            <button>{loading === true ? "loading" : "Add Product"}</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default AddProduct;
