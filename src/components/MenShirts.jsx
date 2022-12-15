import React from 'react'
import { men_shirts } from '../data'
import MenShirtsItem from './MenShirtsItem'
import styled from 'styled-components';
import Cart from './Cart';

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const MenShirts = () => {
  return (
    <Container>
      {men_shirts.map(shirt => (
        <MenShirtsItem shirt = {shirt}/>
      ))}


     
    </Container>
  )
}

export default MenShirts
