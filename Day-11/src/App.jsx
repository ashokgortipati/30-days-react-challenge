import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    async function getData() {
      try {
        setError("");

        const response = await fetch("https://dummyjon.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
        
      }
    }
    getData();
  }, [retry]);

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="app">
      <h1 className="title">🛍️ Product Explorer</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <p className="status">Loading products...</p>
     ) : error ? (
  <>
    <p className="error">Error: {error}</p>
<div className="retry-container">
    <button className="retry-btn"
      onClick={() => {
        setError("");
        setLoading(true);
        setRetry((prev) => prev + 1);
      }}
    >
      ↻ Retry
    </button>
    </div>
  </>
      ) : products.length === 0 ? (
        <p>No product available!</p>
      ) : filteredProducts.length === 0 ? (
        <p className="not-found">No Product Found!</p>
      ) : (
        <ul className="product-container">
          {filteredProducts.map((product) => (
            <li className="product-card" key={product.id}>
              <img
                className="product-image"
                src={product.thumbnail}
                alt={product.title}
              />
              <h3>{product.title}</h3>
              <p className="price">${product.price}</p>
              <p className="rating">⭐ {product.rating}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
