import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavToggle,
  NavToggleLink,
  CartNumber,
} from "./NavbarStyle";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const [isToggle, setIsToggle] = useState(false);
  return (
    <>
      <Nav>
        <NavLink to="/" onClick={() => window.location.replace("/")}>
          <img src={require("../../images/logo.png")} alt="logo" />
        </NavLink>
        <Bars onClick={() => setIsToggle(!isToggle)} />
        <NavMenu>
          <NavLink to="/">홈</NavLink>
          <NavLink to="/upload">업로드</NavLink>
          <NavLink to="/cart">장바구니</NavLink>
          {cart.length > 0 ? <CartNumber>{cart.length}</CartNumber> : null}
        </NavMenu>
      </Nav>
      {isToggle ? (
        <NavToggle>
          <NavToggleLink to="/">홈</NavToggleLink>
          <NavToggleLink to="/upload">업로드</NavToggleLink>
          <NavToggleLink to="/cart">장바구니</NavToggleLink>
        </NavToggle>
      ) : null}
    </>
  );
}

export default Navbar;
