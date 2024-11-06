import React from 'react'
import { useState, useEffect } from 'react';
import { useProductContext } from '../Contaxt/ProductContaxt';
import styled from 'styled-components';

function Filter() {
const { getSingleProduct, isSingleLoading, singleProduct, products } = useProductContext(); // Assuming you already have products fetched
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (products && products.length > 0) {
      // Extract categories from products and make them unique
      const uniqueCategories = [...new Set(products.map(product => product.category))];
      setCategories(uniqueCategories);
    //   console.log(uniqueCategories);
      
    }
  }, [products]);
  

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredProducts(products); // Show all products if search term is empty
    } else {
      const filtered = products.filter(product => {
        // Match search term with title (you can add more fields if needed)
        return product.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredProducts(filtered); // Set filtered products to state
    }
  }, [searchTerm, products]); // Re-run whenever search term or products change

  return (
    <Wraper>
    <div>
        <input
        type="text"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="category">
        <h2>Category</h2>
        <ul>
        {categories.map((category, index) => (
      <li key={index}>{category}</li>
    ))}
        </ul>
      </div>
      
        <button className="btn">Clear Filter</button>
      
    </div>
    </Wraper>
  )
}
const Wraper = styled.section`
.search-bar {
  width: 100%;
  padding: 0.5rem;
  font-size: 16px;
  margin: 10px 0;
  border-radius: 5px;
  border: none;
  outline:1px solid #2563eb;
}
  .category {
  background-color: #f9f9f9;  /* Light background for the category section */
  padding: 20px;
  border-radius: 8px;  /* Rounded corners */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);  /* Subtle shadow for depth */
  max-width: 300px;  /* Limit the width */
  margin: 20px 0;
}

.category h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
  font-weight: bold;
}

.category ul {
  list-style: none;  /* Remove default list bullets */
  padding: 0;
  margin: 0;
}

.category li {
  padding: 8px 0;
  font-size: 1rem;
  color: #555;
  border-bottom: 1px solid #ddd;  /* Light line between items */
}

.category li:last-child {
  border-bottom: none;  /* Remove bottom border from last item */
}

.category li:hover {
  background-color: #f1f1f1;  /* Highlight the category on hover */
  cursor: pointer;
}
.btn{
  padding:1rem;
  outlin:none;
  border:none;
  border-radius:5px;
  color:white;
  background-color:#2563eb;
}
`
export default Filter