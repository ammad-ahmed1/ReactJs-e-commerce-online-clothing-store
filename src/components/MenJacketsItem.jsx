import React from 'react'
import styled from 'styled-components'
import AddToCart from './AddToCart';
import { Link } from 'react-router-dom';
import App from '../App';
import cart from '../helpers/cart';
import { AddInCart } from '../helpers/cart';
import '../styling/MenShirtsItemStyle.css'
//import add from '../helpers/cart';

//----

const Container = styled.div`
    
    margin: 25px;
    height: 100vh;
    min-width: 280px;
    display flex;
    position: relative;
    align-items: center;
    flex: 1;
`;



const Image = styled.img`
    flex: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center; 
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;
const Price = styled.p`
    padding: 10px;
    background-color: white;
    color: gray;
    font-size: 22px;
`;
const Button = styled.button`
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
    position: relative;
`;

//const  = useContext(UserContext);
const MenJacketsItem = ({ item,
    cartArr,
    setCartArr,
    testing
}) => {
    //console.log(cartArr,"112233");
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Price className='price' onClick={() => { setCartArr([...cartArr,item ])}}><h4 className='text'>{item.price}</h4><h4 className='text2'>Add to Cart</h4></Price>

            </Info>
            
            {/*<Button onClick={() => { setCartArr([...cartArr,item ])}}>Add to cart</Button>*/}
            {console.log(cartArr,"cart")}
        </Container>
    )
}

export default MenJacketsItem
