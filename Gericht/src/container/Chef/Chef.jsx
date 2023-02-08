import React from 'react';
import {images} from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef"/>
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Deleniti sit eos sequi incidunt consequuntur odit id.</p>
        </div>
        <p className='p__opensans'> Aliquid unde aut dignissimos consequuntur accusamus quidem voluptatem. Molestiae fugit atque tempora eum ut. Non doloremque est sit et consequatur reprehenderit optio.</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src ={images.sign}/>
      </div>
    </div>
  </div>
);

export default Chef;
