import React, { useEffect } from 'react'
import { useProductContext } from './Contaxt/ProductContaxt';
import styled from 'styled-components';
import { NavLink, useParams } from 'react-router-dom';
import { FaTruck } from 'react-icons/fa'
import { IoMdArrowRoundBack } from "react-icons/io";


const URL = "https://fakestoreapi.com/products"
function SingleProduct() {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();
  useEffect(() => {
    // console.log("Fetching product with ID:", id); // Log to verify ID
    getSingleProduct(`${URL}/${id}`);
  }, [id]);

  
  if (isSingleLoading || !singleProduct) {
    return <div>Loading...</div>;
  }

  const { price, title, description,rating, category, image } =singleProduct;
  const {rate,count}=rating||{};
  return (
    <Wraper>
      <NavLink to='/products'>
      <IoMdArrowRoundBack className='icon-back' />
      </NavLink>
    <div className='body'>
      
      
    <div className="single-product">
        <div className="product-image-container">
          <img src={image} alt={title} className="product-image" />
        </div>
        <div className="product-details">
          <h1>{title}</h1>
          <p className="price">Price: ${price}</p>
          <p className="description">{description}</p>
          <p className="category">Category: {category}</p>
          <div className="rating">
            <span>Rating: {rate} </span>
            <span>({count} in stock)</span>
          </div>
          <div className="btn">
          <button className='add-btn'>Add to cart</button>
          <button className='buy-btn'>Place Order</button>
          </div>
        </div>
        
      </div>
      
    </div>
    </Wraper>
  )
}
const Wraper = styled.section`
.body{
 max-width:1200px;
  margin:0 auto;
  padding:5rem;
}
.single-product {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
 
}
.icon-back{
  font-size:2rem;
  margin:2rem 2rem 0;
  color:black;
}
.product-image-container {
  flex: 1;
  padding: 20px;
}

.product-image {
  max-width: 80%;
  height: auto;
  border-radius: 8px;
}

.product-details {
  flex: 2;
  padding: 20px;
}

.product-details h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.price {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color:#2563eb;
}

.description {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.category {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.rating {
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.additional-info {
  margin-top: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
}
.btn {
  display:flex;
  gap:1rem;
}
.add-btn{
  padding:1rem;
  outlin:none;
  border:none;
  border-radius:5px;
  color:white;
  // background-color: #e9f7ef;
  background-color:#4caf50;
}
.buy-btn{
  padding:1rem;
  outlin:none;
  border:none;
  border-radius:5px;
  color:white;
  background-color:#2563eb;
}
.delivery-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
}

.truck-icon {
  color: #4caf50;
  font-size: 1.5rem;
}

/* Responsive Layout for Smaller Screens */
@media (max-width: 768px) {
  .single-product {
    flex-direction: column;
    align-items: center;
  }

  .product-image-container,
  .product-details {
    width: 100%;
    text-align: center;
  }

  .additional-info {
    flex-direction: column;
    align-items: center;
  }

  .truck-icon {
    font-size: 2rem;
  }
}


`
export default SingleProduct