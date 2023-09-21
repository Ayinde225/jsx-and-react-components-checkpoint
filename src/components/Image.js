import React from 'react';
import { products } from '../products';

function Image({ image }) {
  return (
    <div className="product-image">
      <img src={image} alt="Produit" />
    </div>
  );
}

export default Image;
