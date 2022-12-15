import React from 'react'
import { menJackets} from '../data';
import MenJacketsItem from './MenJacketsItem';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const MenJackets = (
  {
    cartArr,
    setCartArr,
    testing
  }
) => {
  return (
    <div>
      <Container>
        {menJackets.map((item) => (
            <MenJacketsItem item = {item} key = {item.id} cartArr={cartArr} setCartArr={setCartArr} testing = {testing}/>
        ))}
      </Container>
    </div>
  )
}

export default MenJackets
