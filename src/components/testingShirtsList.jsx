import React from 'react'

const testingShirtsList = (shirt) => {
  return (
    <div>
      <div className='row'>
        <div className='col'>
            <img src='{shirt.img}'/>
        </div>
      </div>
    </div>
  )
}

export default testingShirtsList
