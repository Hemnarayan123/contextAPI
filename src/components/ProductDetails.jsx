import React, { useContext } from "react";
import ProductContext from "./context/ProductContext";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const p = products.find((product) => product.id === parseInt(id));
  return (
    <>
        <div key={p.id}>
          <img src={p.url} alt={p.ProductName} />
          <h2>{p.ProductName}</h2>
          <p>{p.description}</p>
          <p>Price: ${p.price}</p>
          <p>Discounted Price: ${p.price - p.priceOff}</p>
        </div>
    </>
  );
}

export default ProductDetails;
