import React from 'react';

import { images } from '../../constants';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { FooterOverlay, Newsletter} from '../../components';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding app__bg'>
    <div className='app__footer-newsletter'>
      <Newsletter />
    </div>
    <div className='app__footer-links app__bg'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>123, Two St, Sabah, NY 10022, Mars</p>
        <p className='p__opensans'>+12 332 3565</p>
        <p className='p__opensans'>+123 332 3565</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="footer-logo"/>
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others"</p>
        <img src={images.spoon} alt="footer-spoon" className='spoon__img' style={{marginTop: 15}} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday - Friday:</p>
        <p className='p__opensans'>08:00am - 12:00am</p>
        <p className='p__opensans'>Saturday - Sunday:</p>
        <p className='p__opensans'>07:00am - 11:00pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'><a href='https://github.com/wahpiangle/projects/'>Quan Ming @ 2023</a></p>
    </div>
  </div>
);

export default Footer;
