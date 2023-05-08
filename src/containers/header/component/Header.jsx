import React from 'react';
import './Header.css';
import teamLogo from '../../../assets/jesus.png';
import people from '../../../assets/people.png';

export default function Header() {
  return (
    <div className='reeds-utd__header section__padding' id='home'>
      <div className='reeds-utd__header-content'>
        <h1 className='gradient__text'>
          The Next Generation&apos;s Greatest Football Club Is Here
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <div className='reeds-utd__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Join Today</button>
        </div>
        <div className='reeds-utd__header-content__people'>
          <img src={people} alt='people who have joined' />
          <p>160+ people have already applied to join in the last 24 Hours</p>
        </div>
      </div>
      <div className='reeds-utd__header-image'>
        <img src={teamLogo} alt='teamLogo'/>
      </div>
    </div>
  );
}
