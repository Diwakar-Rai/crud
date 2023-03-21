import React from "react";
import Style from "./_product.module.css";
import { NavLink, Outlet } from "react-router-dom";
const ProductDashboard = () => {
  return (
    <section id={Style.ProductDashboard}>
      <article>
        <aside className={Style.sidebar}>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${Style.active}` : "inactive"
                }
                to="/product-dashboard/all-product"
                end
              >
                All Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product-dashboard/add-product"
                className={({ isActive }) =>
                  isActive ? `${Style.active}` : "inactive"
                }
              >
                Add Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product-dashboard/allProductTable"
                className={({ isActive }) =>
                  isActive ? `${Style.active}` : "inactive"
                }
                end
              >
                Product 
                table
              </NavLink>
            </li>
          </ul>
        </aside>
        <aside className={Style.mainContainer}>
          <Outlet />
        </aside>
      </article>
    </section>
  );
};

export default ProductDashboard;
