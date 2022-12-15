import { Container } from '@mui/system'
import React from 'react'
import { ReactDOM } from 'react'
import Announcements from '../components/Announcements'
import Categories from '../components/Categories'
import NavbarTwo from '../components/NavbarTwo'
import Slider from '../components/Slider'
import Register from '../components/Register'
import Cart2 from '../components/Cart2'
import styled from 'styled-components';
import Footer from '../components/Footer'
const Parent = styled.div`
  margin-bottom: 0px;

`
const Parent2 = styled.div`
  
  margin-top: 0px;

`




const Home = () => {
  return (
    <div>
      <Parent>
        <Slider />
      </Parent>
      

      {/*<Cart2 />*/}
      <Parent2>  
        <Categories /> 
      </Parent2>
      
    </div>
    
  )
}

export default Home
