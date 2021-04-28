import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function CardList() {
  // useState for products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fecthProducts = async () => {
      const response = await axios.get("http://localhost:1337/products");
      console.log(response);

      setProducts(response.data);
    };

    fecthProducts();
  }, []);

  // useEffect för att kunna hämta data från database

  return (
    <div>
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            productName={product.name}
            price={product.Price}
            description={product.Descriptions}
            image={product.Image}
          />
        );
      })}
    </div>
  );
}

export default CardList;

// rfce
// 11.00
