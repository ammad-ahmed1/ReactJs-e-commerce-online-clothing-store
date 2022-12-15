import { margin } from '@mui/system'
import React from 'react'
import { createSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import '../styling/Cart2.css'
import cartArr from '../App'
import AddToCart from './AddToCart'

const card = styled.div`
margin: auto;
max-width: 950px;
width: 90%;
box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
border-radius: 1rem;
border: transparent;

`;
const cart = styled.div`
background-color: #fff;
padding: 4vh 5vh;
border-bottom-left-radius: 1rem;
border-top-left-radius: 1rem;
`;
const summary = styled.div`
background-color: #ddd;
border-top-right-radius: 1rem;
border-bottom-right-radius: 1rem;
padding: 4vh;
color: rgb(65, 65, 65);
`;
const select = styled.div`
border: 1px solid rgba(0, 0, 0, 0.137);
padding: 1.5vh 1vh;
margin-bottom: 4vh;
outline: none;
width: 100%;
background-color: rgb(247, 247, 247);
}
`;
const input = styled.div`
border: 1px solid rgba(0, 0, 0, 0.137);
    padding: 1vh;
    margin-bottom: 4vh;
    outline: none;
    width: 100%;
    background-color: rgb(247, 247, 247);
`;
const btn = styled.div`

`;


const Cart2 = ({cartObj}) => {
console.log('testing items in cart2', cartObj);

  return (
    
    
    <div className='Card'>
        <div className='row'>
            <div className='col-md-8 cart'>
                <div className='title'>
                    <div className='row'>
                        <div className="col"><h4><b>This is cart 2</b></h4></div>
                        <div className="col align-self-center text-right text-muted">{cartArr.length} Items</div>   
                    </div>
                </div>
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
            </div>
            <div className='col-md-4 summary'>
                <div><h5>Summary</h5></div>
                <hr></hr>
                <div className='row'>
                    <div className='col'>Item 3</div>
                    <div className='col text-right'>&euro; 132.00</div>
                </div>
                <form>
                    <p>Shipping</p>
                    <select><option className="text-muted">Standard-Delivery- &euro;5.00</option></select>
                </form>
                <div className="row" >
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">&euro; 137.00</div>
                    </div>
                    <button className="btn" >CHECKOUT</button>
            </div>
        </div>
    </div>
  )
}

export default Cart2
