import React from 'react'
import { useState } from 'react';
import Cart2 from './Cart2'
import cartArr from '../App'
import styled from 'styled-components'
import Cart2Child from './Cart2Child';
let nextd = 0;
const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const AddToCart = ({cartArr}) => {

  return (
    <Container>
      {cartArr.map((cartObj) => (
        <Cart2 cartObj = {cartObj} />
        
      ))}
    </Container>
  )
}
/*
{menJackets.map((item) => (
            <MenJacketsItem item = {item} key = {item.id} />
        ))}
*/
export default AddToCart
