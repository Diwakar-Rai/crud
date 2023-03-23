import React from "react";
import Styles from "./_navbar.module.css";
import { Link, NavLink } from "react-router-dom";


const Menu = () => {
  return (
    <div className={Styles.menu}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <NavLink to="/product-dashboard">Products</NavLink>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
