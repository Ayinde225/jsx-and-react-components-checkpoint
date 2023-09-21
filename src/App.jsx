import React from "react";
import "./style/App.css";
import { products } from "./products";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import myPicture from "./images/mypicture.jpg";

function App() {
  const firstName = "Ayinde";

  return (
    <div className="App">
      <div className="card">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <Image image={product.image} />
            <Name name={product.name} />
            <Price price={product.price} />
            <Description description={product.description} />
          </div>
        ))}
      </div>
      <div className="greeting">
        {firstName ? <p>Bonjour, {firstName} !</p> : <p>Bonjour, là !</p>}
        {firstName && (
          <img src={myPicture} alt="mypicture" className="user-image" />
        )}
      </div>
    </div>
  );
}

export default App;
