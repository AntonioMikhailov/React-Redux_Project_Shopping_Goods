import React from 'react'
import { useSelector } from 'react-redux';
import {   NavLink } from 'react-router-dom';
import { formatCurrency } from '../utils/formatCurrency';
export default function ProductComponent () {
  const products = useSelector((state)=> {
    return state.allProducts.products
  })
  return (
  <>
 {
   products.map((item, i)=> { 
    // можно сделать деструктуризацию сначала и вставлять в теги уже без item 
  // /  const { id, title, image, price, category } = item;
    return ( 
      <div key={item.id} className='wrapper-column' >
        {/* Добавляем ссылку по id товара */}
        <NavLink to={`/product/${item.id}`}>
      <div className='wrapper-item'>
        <div key={item.id} className='wrapper-image'>
          <img src={item.image} alt="img" />
          </div>
          <div className='wrapper-content'>
            <div className='wrapper-header'>{item.title}  </div>
             <div className='prices-row' >
          <div className='meta price'>{formatCurrency.format(item.price)}</div>
            <div className='meta' >{item.category}</div>
          </div>
          </div>
      </div>
      </NavLink>
      </div> 
     )})  
 }
  </>
  )
}
