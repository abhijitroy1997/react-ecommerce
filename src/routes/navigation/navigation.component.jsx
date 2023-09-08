import "./navigation.styles.scss";
import React from "react";

import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import { ReactComponent as ProfileIcon } from "../../assets/profile-circle.svg";
function Navigation() {
  return (
    <>
      <div className="navBar">
        <div className="sectionOne">
          <Link className="navLinks" to="allProds">
            <h2 className="logo">Easy Store</h2>
          </Link>
          <Link className="navLinks" to="allProds">
            Products
          </Link>
          <Link className="navLinks" to="addProd">
            Add Product
          </Link>
        </div>

        <div className="sectionTwo">
          <Link className="navLinks" to="cart">
            <CartIcon />
          </Link>

          <div className="navItem">
            <ProfileIcon className="avatar" alt="" />
            <p className="name">Welcome User</p>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
