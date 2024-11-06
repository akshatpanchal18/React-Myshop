import React from 'react'
import Product from './Product'
import { useProductContext } from '../Contaxt/ProductContaxt'
import styled from 'styled-components';

function ProductList() {
    const {products}=useProductContext();
  return (
    <Wraper>
        <div className="featured-products"><p><strong>{products.length}</strong> Products avilable </p></div>
        <div className='product-list'>
        {
            products.map((curElem)=>{
                return <Product key={curElem.id} {...curElem}/>
            })
          }
    </div>
    
    </Wraper>
  )
}
const Wraper=styled.section`

.featured-products {
  margin: 40px 0;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
  .featured-products h2 {
  text-align: center;
  margin-bottom: 20px;
}

  .product-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}`
export default ProductList