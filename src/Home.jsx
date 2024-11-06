import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FeatureProducts from "./Components/FeatureProducts.jsx";

const Home = () => {
  return (
    <Wraper>
    <div className="home-container">
      <header className="hero-banner">
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Your one-stop shop for amazing products!</p>
        <Link to="/products" className="btn-shop-now">Shop Now</Link>
      </header>

      <FeatureProducts/>

      <section className="promotions">
        <h2>Special Promotions</h2>
        <p>Don't miss out on our limited-time offers! Get up to 50% off on selected items.</p>
        <Link to="/promotions" className="btn-view-promotions">View Promotions</Link>
      </section>
      <FeatureProducts/>
    </div>
    </Wraper>
  );
};
const Wraper = styled.section`
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.hero-banner {
  background-color: #e9eef7;
  color: Black;
  text-align: center;
  padding: 60px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.hero-banner h1 {
  font-size: 2.5rem;
  margin: 0 0 10px;
}

.hero-banner p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}


.promotions {
  margin: 40px 0;
  padding: 20px;
  background-color: #e9f7ef;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.promotions h2 {
  margin-bottom: 10px;
}

.promotions p {
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.featured-products h2{
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
}

.product-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.product-card {
  border: 1px solid #ccc;
  padding: 20px; /* Padding for spacing inside the card */
  text-align: center;
  width: 250px; /* Width of the product card */
  height: 350px; /* Set a fixed height for the card */
  margin: 15px; /* Margin for spacing between cards */
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  display: flex; /* Use flexbox for vertical alignment */
  flex-direction: column; /* Stack children vertically */
  justify-content: space-between; /* Distribute space evenly */
}

.product-card img {
  max-width: 100%;
  border-radius: 5px;
  height: auto; /* Maintain aspect ratio */
}

.product-card h3 {
  margin: 10px 0; /* Space above and below the product title */
}

.product-card p {
  margin: 10px 0; /* Space above and below the price */
}

.product-card:hover {
  transform: scale(1.05); /* Slightly larger on hover */
}


// .category-list {
//   display: flex;
//   justify-content: space-around;
//   flex-wrap: wrap;
// }

// .category-item {
//   padding: 15px 30px;
//   background-color: #28a745;
//   color: white;
//   text-decoration: none;
//   border-radius: 5px;
//   transition: background-color 0.3s;
//   margin: 10px;
// }

// .category-item:hover {
//   background-color: #218838;
// }

.btn-shop-now,
.btn-view-product,
.btn-view-promotions {
  padding: 10px 20px;
  background-color:#2563eb;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  margin-top: 10px;
}

.btn-shop-now:hover,
.btn-view-product:hover,
.btn-view-promotions:hover {
  background-color: #6288da;
}


`
export default Home;
