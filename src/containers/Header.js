import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <div  className='header-menu' >
   <div className="container-two">
   <div className='header-wrapper' >
        <h2>Каталог товаров</h2>
        <NavLink to='/' ><button className='btn-catalog' > в каталог</button></NavLink>
   </div>
   </div>
    </div>
  )
}
