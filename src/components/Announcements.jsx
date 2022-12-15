import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    height: 20px;
    background-color: teal;
    color: white;
    align-items: center;
    display: flex;
    justify-content: center;

`;
const Announcements = () => {
  return (
    <div>
      <Container>Flat 30% sale in outlets</Container>
    </div>
  )
}

export default Announcements
