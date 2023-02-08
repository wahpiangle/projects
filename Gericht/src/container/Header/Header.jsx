import React from 'react';
import {images} from '../../constants';
import {SubHeading} from '../../components';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Est nemo quidem quisquam sapiente et est tempore voluptas. Mollitia labore rerum sapiente. Quia atque dolor repudiandae provident nam. Eum magnam dolor fugit autem consequatur dolor. Voluptatem deserunt dolorem maiores veritatis perspiciatis quis. Placeat</p>
      <button className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header-img"/>
    </div>
  </div>
);

export default Header;
