import React from 'react';

import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from '../../components';

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title="Chase the new flavour"/>
        <h1 className='app__header-h1'>The Key to Fine Dining</h1>
        <p className='p__opensans' style={{margin:"2rem 0"}}>Savor the moment, indulge in excellence. Giricht artistry meets perfection on every plate, inviting you to a world of exquisite flavors and unforgettable memories.</p>
        <button type='button' className='custom__button'> Explore Menu </button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.welcome} alt="Welcome Img" />
      </div>
    </div>
  )
}

export default Header
