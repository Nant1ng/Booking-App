import React from "react";

function card({ productName, price, description }) {
  return (
    <div className="relative bg-white">
      <div> Name: {productName} </div>
      <div> Price: {price} </div>
      <div> details : {description}</div>
      <img src='"http://localhost:1337"{Image.url}' ></img>
    </div>
  );
}

export default card;
