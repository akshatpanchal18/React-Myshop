import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // assuming you're using React Router
import { FaShoppingCart, FaUser } from "react-icons/fa"; // using react-icons for icons
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [menuIcon, setMenuIcon] = useState();
  return (
    <Wraper>
      <div className="navbar">
        <div className="navbar-logo">
          <NavLink to="/">MyStore</NavLink>
        </div>
        <ul className="navbar-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="navbar-icons">
          <NavLink to="/user" className="user-icon">
            <div className="icon-container">
              <FaUser />
              <span className="username">Username</span>
            </div>
          </NavLink>
          <NavLink to="/cart" className="cart-icon">
            <div className="cart-container">
              <FaShoppingCart />
              <span className="cart-badge">3</span>
              
            </div>
          </NavLink>
        </div>
      </div>
      <div className="mobile-navbar-btn">
        <AiOutlineMenu
          name="menu-outline"
          className="mobile-nav-icon"
          onClick={() => setMenuIcon(true)}
        />
        <AiOutlineClose
          name="close-outline"
          className="mobile-nav-icon close-outline"
          onClick={() => setMenuIcon(false)}
        />
      </div>
    </Wraper>
  );
}
const Wraper = styled.section`
  .navbar {
    font-family: Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px;
    background-color: #4e81de;
    // background-color: #2563eb;
    color: white;
    // color: #2563eb;
    margin: 0;
  }
  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }
  .navbar-logo a {
    font-size: 1.5rem;
    color: white;
    text-decoration: none;
    font-weight: bold;
  }

  .navbar-links {
    display: flex;
    gap: 20px;
  }
  ul {
    list-style-type: none;
  }
  .navbar-links a {
    color: white;
    // color: #2563eb;
    text-decoration: none;
    font-size: 1.5rem;
  }
  .icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
    .cart-container {
  position: relative;
}
  .cart-badge {
  position: absolute;
  top: -5px;  /* Adjust top position to move the badge up */
  right: -5px; /* Adjust right position to move the badge to the right */
  background-color: black;
  color: white;
  border-radius: 50%;
  padding: 3px 6px;
  font-size: 12px;
  font-weight: bold;
}
  .navbar-icons {
    display: flex;
    gap: 15px;
    font-size: 1.4rem;
  }
  .username {
    font-size: 12px;
    color: #fff;
    margin-top: 8px;
  }
  .navbar-icons a {
    color: white;
    text-decoration: none;
    position: relative;
    font-size:28px;
  }
  .navbar-links a:hover {
    color: #ced4da;
  }
  /* Active link styling */
  .active-link {
    color: #212529;
    font-weight: bold;
  }

  /* Responsive for Mobile */
  @media (max-width: 768px) {
    .navbar-links {
      display: none;
    }

    .navbar {
      flex-wrap: wrap;
    }
  }
`;
export default Navbar;
