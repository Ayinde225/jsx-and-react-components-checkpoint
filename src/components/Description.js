import React from 'react';
import { products } from '../products';

function Description({ description }) {
  return (
    <div className="product-description">
      <p>{description}</p>
    </div>
  );
}

export default Description;
