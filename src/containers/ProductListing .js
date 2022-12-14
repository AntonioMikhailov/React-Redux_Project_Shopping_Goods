import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch  } from 'react-redux'
import { setProducts } from '../redux/actions/productActions';
 
import ProductComponent from './ProductComponent';

export default function ProductListing () {
  const dispatch  = useDispatch()
 useEffect(()=> {
  function fetchProducts() { 
    axios.get('https://fakestoreapi.com/products').catch((err)=> {
  console.log('Error', err);
  }).then(res =>{
  
 dispatch(setProducts(res.data))
  })
  }
  fetchProducts()
}, [ dispatch])

  return (
    <div className="container-two">
    <div className='content-wrapper' style={{marginTop: '20px'}} >
       <ProductComponent/>
   </div>
    </div>
 
  )
}


