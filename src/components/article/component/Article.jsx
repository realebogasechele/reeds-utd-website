import React from 'react';
import './Article.css';

export default function Article({imgUrl, date, text}) {
  return (
    <div className="reeds-utd__match-history-container_article">
    <div className="reeds-utd__match-history-container_article-image">
      <img src={imgUrl} alt="match-history_image" />
    </div>
    <div className="reeds-utd__match-history-container_article-content">
      <div>
        <p>{new Date(date).toDateString()}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
  );
}
