import React from "react";
import styles from "../SectionThree/SectionThree.module.css";
import react, { useState, useEffect } from "react";
import axios from "axios";

function SectionThree() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const productString = JSON.stringify(product);
    localStorage.setItem("cartItem", productString);
  };

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.topBox}>
          <h1>Popular Items</h1>
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida.
          </p>
        </div>
        <div className={styles.bottomBox}>
          <div className={styles.Products}>
            {products.map((product, index) => (
              <div key={index} className={styles.ProductItem}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.imageCard}
                />
                <div className={styles.addCard}>
                  <button onClick={() => addToCart(product)}>
                    ADD TO CART
                  </button>
                </div>
                <div className={styles.cartTitle}>
                  <p>{product.title}</p>
                </div>
                <p>${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionThree;
