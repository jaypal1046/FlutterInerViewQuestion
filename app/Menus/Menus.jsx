import React from 'react'
import Image from 'next/image'

function Menus() {
  return (
    <div className='mContainer'>
      <h2>{"What's hot"}</h2>
      <h1>Most Popular</h1>
      <div className='items'>
        <div className='mimageCon'>
          <Image  src="" alt fill children="mimage"></Image>

        </div>
        <div className='mtextContainer'>
          <span className='mcatrgory mtravel'
          >
            Travel
          </span>
          <h3>Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h3>

        </div>

      </div>

      
    </div>
  )
}

export default Menus
