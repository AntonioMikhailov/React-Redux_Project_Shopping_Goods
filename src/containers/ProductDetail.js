import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { removeSelectedProducts, selectedProducts } from '../redux/actions/productActions';
import { InfinitySpin  } from 'react-loader-spinner';
export default function ProductDetail() {
  const {productId} = useParams()   
 // импортируем Хук
     const product = useSelector((state)=> {
     //указываем имя редюсера и какой объект в массиве нам нужен т.к.  products:  - это массив объектов
       return state.product
     })
   // деструктурируем объект
     const { title, price, image, category, description} = product
    const dispatch  = useDispatch()
    useEffect(()=> {
   // вставляем в URL текущую страницу
      function fetchProductDetail() { 
        // сначала удаляем предыдущий Товар из selectedProductReduser редюсера
        dispatch(removeSelectedProducts())
        // делаем проверку
     if(productId && productId !== '') {
      axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=> { console.log('Error', err);
    }).then(res =>{
     dispatch(selectedProducts(res.data))
    })
     }
      }
      fetchProductDetail()
    }, [dispatch, productId])
  return (
    <div className="ui grid container">
      {/* (Object.keys(product).length); // кол-во ключей в свойстве объекта - пока не загрузится будет 0 и показывыаем Loader */}
    {Object.keys(product).length === 0 ? (
     <>
    <div className='loader-wrapper' >
  <div className='loader'  >
  <InfinitySpin 
  height="150"
  width="150"
  color="#ff3e6c"
  ariaLabel="audio-loading"
 wrapperStyle={{}}
  wrapperClass="wrapper-class"
  visible={true}/>
    <h3 className='text-loader' >...Загружаем</h3>
  </div>
</div>
      </>
    ) : (
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              <img className="ui fluid image" src={image} alt='img' />
            </div>
            <div className="column rp">
              <h1>{title}</h1>
              <h2>
                <a href=' ' className="ui teal tag label">${price}</a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  )
}
