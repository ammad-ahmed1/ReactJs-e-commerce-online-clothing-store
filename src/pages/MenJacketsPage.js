import React from 'react'
import MenJackets from '../components/MenJackets'

const MenJacketsPage = ({
  cartArr,
  setCartArr,
  testing
}) => {
  return (
    <div>
      <MenJackets cartArr={cartArr} setCartArr={setCartArr} testing = {testing}/>
    </div>
  )
}

export default MenJacketsPage
