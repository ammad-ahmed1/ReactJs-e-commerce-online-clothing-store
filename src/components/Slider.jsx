import React from 'react'
import styled from 'styled-components'
import { ReactDOM } from 'react';
import { useStepContext } from '@mui/material';
import {slideItems} from "../data";
import  { useState } from 'react';
//import {ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons"
//import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
//import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const Container = styled.div`
    width: 100%;
    height:100vh;
    display flex;
    background-color: white;
    position: relative;
    overflow: hidden;
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: gray;
    border-radius: 50%;
    align-items: center;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;

`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.2s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  `;
  const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
  `;
  const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
  `;
  const Img = styled.img`
    height: 80%;
  `;
  const InfoContainer = styled.div`
  
  `;
const Slider = () => {
    /*
    <ArrowLeftOutlined/>
    <ArrowRightOutlined/>


    -------Slider static dummy item----------
    <Slide>
            <ImgContainer>
              <img src = {'images/homepage/one.png'} />
            </ImgContainer>
            <InfoContainer>
              
            </InfoContainer>
          </Slide>
          <Slide>
            <ImgContainer>
              <img src = {'images/homepage/two.png'} />
            </ImgContainer>
            <InfoContainer>

            </InfoContainer>
          </Slide>
          
    */
   const [slideIndex, setSlideIndex] = useState(0);
   const handleClick = (direction) => {
    console.log(direction);
    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < slideItems.length-1 ? slideIndex + 1 : 0);
    }
   };
  return (
    <div>
      <Container>
        <Arrow direction = "left" onClick={() => handleClick("left")}>

        </Arrow>
        
        <Wrapper slideIndex = {slideIndex}>
          {slideItems.map((item) => (
            <Slide>
              <ImgContainer>
                <img src = {item.img}/>
              </ImgContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction = "right" onClick={() => handleClick("right")}>
          
        </Arrow>
      </Container>
    </div>
  )
  }
export default Slider
