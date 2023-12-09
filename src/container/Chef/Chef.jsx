import React from 'react'
import  { images } from "../../constants"
import { SubHeading } from '../../components'

import './Chef.css'

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding chef'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} alt="Chef" />
      </div>

      <div className='app__wrapper_info'>
        <SubHeading title="Chef's word"/>
        <h1 className='headtext__cormorant'>What we believe in</h1>
        
        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt="Quote" />
            <p className='p__opensans'> Our kitchen is not just a place to cook; </p>
          </div>
          <p className='p__opensans'>it's a canvas where passion meets ingredients, and every dish tells a story. At Gericht, we believe in transforming every meal into an unforgettable journey.</p>
        </div>

        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>

      </div>
    </div>
  )
}

export default Chef