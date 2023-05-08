import React from 'react';
import logo from '../../../assets/website-logo.png';
import './Footer.css';
import { navData } from '../../../data/navData';

export default function Footer() {
  return (
    <div className='reeds-utd__footer section__padding'>
      <div className='reeds-utd__footer-links'>
        <div className='reeds-utd__footer-links_logo'>
          <img src={logo} alt='reeds-utd_logo' />
          <p>{/*Address Here <br />*/} All Rights Reserved</p>
        </div>
        <div className='reeds-utd__footer-links_div'>
          <h4>Links</h4>
          {navData.map((nav) => (
            <p key={nav.id}>
              <a href={nav.link}>{nav.title}</a>
            </p>
          ))}
        </div>
        <div className='reeds-utd__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='reeds-utd__footer-links_div'>
          <h4>Get in touch</h4>
          {/* <p>Address Here</p> */}
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className='reeds-utd__footer-copyright'>
        <p>@2023 REEDS UNITED. All rights reserved.</p>
      </div>
      <div className='reeds-utd__footer_company-text'>
        <p>
          Powered By <span>Verzion Zero</span>
        </p>
      </div>
    </div>
  );
}
