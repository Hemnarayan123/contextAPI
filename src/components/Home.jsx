import React, { useContext } from "react";
import ProductContext from "./context/ProductContext.js";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const { products } = useContext(ProductContext);

  return (
    <>
    <div className="home-main-div">
      {products.map((product) => (
        <div className="product-card" key={product.id}>

          <div className="image-div">
            <img src={product.url} alt={product.ProductName} />
          </div>

          <div className="content-div">
            <h2>{product.ProductName}</h2>
            <p className="price">Price: ${product.price}</p>
            <p className="discount">Discounted Price: ${product.price - product.priceOff}</p>
            <Link key={product.id} to={`/productDetails/${product.id}`}>Details</Link>
          </div>
        </div>
      ))}
      </div>
    </>
  );
}

export default Home;
