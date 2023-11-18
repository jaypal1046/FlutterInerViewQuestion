import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Style from "./style.png";
import Culture from "./culture.png";
import Fashion from "./fashion.png";
import Food from "./food.png";
import Travel from "./travel.png";
import Coding from "./coding.png";
import {Styles} from "./CategoryStyle.css"



function CategoryList() {
  return (
    <div className='ccontainer'>
      <h1 className='ctitle'>Popular Categories</h1>
      <div className='categories'>
        
          <Link href="/blog?cat=style" className='category style '>
          <Image width={32} height={32} src={Style} className='cimage' />  
          Style
          </Link>
          <Link href="/blog?cat=style" className='category fashion '>
          <Image width={32} height={32} src={Fashion} className='cimage' />  
          fashion
          </Link>
          <Link href="/blog?cat=style" className='category food '>
          <Image width={32} height={32} src={Food} className='cimage' />  
          food
          </Link>

          <Link href="/blog?cat=style" className='category travel '>
          <Image width={32} height={32} src={Travel} className='cimage' />  
          Travel
          </Link>
          <Link href="/blog?cat=style" className='category culture '>
          <Image width={32} height={32} src={Culture} className='cimage' />  
          Culture
          </Link>
          <Link href="/blog?cat=style" className='category coding '>
          <Image width={32} height={32} src={Coding} className='cimage' />  
          coding
          </Link>
         


       

      </div>
    
      
    </div>
  )
}

export default CategoryList
