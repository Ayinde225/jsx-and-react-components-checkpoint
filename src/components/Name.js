import React from "react";
import { products } from '../products';

function Name({ name }) {
  return (
    <div className="product-name">
      <h2>{name}</h2>
    </div>
  );
}

export default Name;
