import React from 'react';
import images from './images';

import './Brand.css';
import { openNewTab } from '../functions/functions';

export default function Brand() {
  return (
    <div className='reeds-utd__brand section__padding'>
      {images.map((i) => (
        <div key={i.alt}>
          <img key={i.alt} id={i.url} src={i.image} alt={i.alt} onClick={openNewTab} />
        </div>
      ))}
    </div>
  );
}
