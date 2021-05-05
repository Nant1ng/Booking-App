import React from "react";

function card({ productName, price, description, image }) {
  return (
    <div className="relative bg-white">
      <div> Name: {productName} </div>
      <div> Price: {price} </div>
      <div> details : {description}</div>
      <img src={`http://localhost:1337${image[0].url}`}></img>
    </div>
  );
}

export default card;
