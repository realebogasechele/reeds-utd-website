import React from 'react';
import './Feature.css';

export default function Feature({ title, paragraph }) {
  return (
    <div className='reeds-utd__features-container__feature'>
      <div className='reeds-utd__features-container__feature-title'>
        <div/>
        <h1>{title}</h1>
      </div>
      <div className='reeds-utd__features-container_feature-text'>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}
