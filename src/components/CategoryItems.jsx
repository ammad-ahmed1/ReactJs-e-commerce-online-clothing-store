import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.div`
    
    margin: 3px;
    height: 100vh;
    width: 100%;
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
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`;
const CategoryItems = ({item}) => {
  return(
    <Container>
        <Image src = {item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Link to = {item.btn}><Button>Shop Now</Button></Link>
        </Info>
    </Container>
    
  )
}

export default CategoryItems
