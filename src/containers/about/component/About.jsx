import React from 'react';
import { Feature } from '../../../components';
import { about } from '../../../data/about';
import './About.css';

export default function About() {
  return (
    <div className="reeds-utd__about section__margin" id='about'>
      <div className="reeds-utd__about-info">
        <Feature key={'-1'} title={about.mainTitle} paragraph={about.mainParagraph}/>
      </div>
      <div className="reeds-utd__about-heading">
        <h1 className='gradient__text'>What makes our club the best for you join ?</h1>
        <p>Our Previous Matches</p>
      </div>
      <div className='reeds-utd__about-points-container'>
        {about.points.map((point) => (
          <Feature key={point.id} title={point.title} paragraph={point.paragragh}/>
        ))}
      </div>
    </div>
  );
}