import React from 'react';
import { Feature } from '../../../components';
import matches from '../../../data/matches';

import './MatchInfo.css';

export default function MatchInfo() {
  return (
    <div className='reeds-utd__match-info section__padding' id='next-matches'>
      <div className='reeds-utd__match-info-heading'>
        <h1 className='gradient__text'>
          Here Is An Overview Of Our Next Matches
        </h1>
        <p>Follow Us On Social Media</p>
      </div>
      <div className='reeds-utd__match-info-container'>
        {matches.map((match) => (
          <Feature key={match.id} title={match.title} paragraph={match.info} />
        ))}
      </div>
    </div>
  );
}
