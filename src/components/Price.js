import React from "react";
import { products } from '../products';

function Price({ price }) {
  return (
    <div className="product-price">
      <span>Prix : {price} cfa</span>
    </div>
  );
}

export default Price;
