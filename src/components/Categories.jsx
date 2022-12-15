import React from 'react'
//import styled from "@mui/material"
//import styled from "@material-ui/core"
import styled from 'styled-components'
import CategoryItems from './CategoryItems'
import { categories } from '../data'
const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between:
`;
const WomenItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Categories = () => {

      return (
        <>
        
          <Container>
            {categories.map(item => (
                <CategoryItems item = {item} />
            ))}

            
          </Container>
          <WomenItems>
              <img src='images/women/jackets/main-page-women-jackets.png'/>
          </WomenItems> 
        </>
          
        
      )
      
      
}

export default Categories
