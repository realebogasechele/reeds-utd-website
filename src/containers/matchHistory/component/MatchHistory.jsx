import React from 'react';
import data from '../../../data/article';
import { Article } from '../../../components';

import './MatchHistory.css';

export default function MatchHistory() {
  return (
    <div className="reeds-utd__match-history section__padding" id="match-history">
    <div className="reeds-utd__match-history-heading">
      <h1 className="gradient__text">{data.title}</h1>
    </div>
    <div className="reeds-utd__match-history-container">
      <div className="reeds-utd__match-history-container_main">
        <Article imgUrl={data.mainImageUrl} date={data.mainDate} text={data.mainTitle} />
      </div>
      <div className="reeds-utd__match-history-container_secondary">
        {data.others.map((article) => (
          <Article key={article.date} imgUrl={article.imageUrl} date={article.date} text={article.title} />
        ))}
      </div>
    </div>
  </div>
  );
}