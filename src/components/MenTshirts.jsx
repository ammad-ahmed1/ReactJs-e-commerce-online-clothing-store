import React from 'react'
import { menTshirts } from '../data'
import MenShirtsItem from './MenShirtsItem'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const MenTshirts = () => {
  return (
    <Container>
      {menTshirts.map(item => (
        <MenShirtsItem item = {item}/>
      ))}
    </Container>
  )
}

export default MenTshirts
