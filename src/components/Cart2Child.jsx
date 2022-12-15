import React from 'react'
import cartArr from '../App'
import AddToCart from './AddToCart'
const Cart2Child = ({cartObj}) => {
  return (
    <div>
        {/*
            <div className='row border-top border-bottom'>
            <div className='row main align-items-center'>
                <div className='col-2'><img className='img-fluid' src = {cartObj.img}/></div>
                <div className='col'>
                    <div className='row text-muted'>{cartObj.title}</div>
                </div>
                <div className='col'>
                    <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                </div>
                <div className='col'>
                    {cartObj.price} <span className="close">&#10005;</span>
                </div>
            </div>
        </div>
  */}
      
    </div>
  )
}

export default Cart2Child
