import React, { useState } from 'react';
import logo from '../../../assets/website-logo.png';
import { navData } from '../../../data/navData';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import './Navbar.css';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='reeds-utd__navbar'>
      <div className='reeds-utd__navbar-links'>
        <div className='reeds-utd__navbar-links_logo'>
          <img src={logo} alt='The Reeds United' />
        </div>
      </div>
      <div className='reeds-utd__navbar-links_container'>
          {navData.map((item) => (
              <p key={item.id}>
                <a key={item.id} href={item.link}>
                  {item.title}
                </a>
              </p>
          ))}
        </div>
      <div className='reeds-utd__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <div className='reeds-utd__navbar-menu_container scale-up-center'>
              <div className='reeds-utd__navbar-menu_container-links'>
                {navData.map((item) => (
                    <p key={item.id}>
                      <a key={item.id} href={item.link}>
                        {item.title}
                      </a>
                    </p>
                ))}
              </div>
            </div>
          )}
        </div>
    </div>
  );
}
