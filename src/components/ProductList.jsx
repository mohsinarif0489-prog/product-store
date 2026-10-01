import { useState, useEffect } from "react";
import ProductCard from "./ProductCard.jsx";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadProducts() {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=8");
      if (!response.ok) {
        throw new Error(`Server error (status ${response.status})`);
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) return <p className="status">Loading products...</p>;

  if (error) {
    return (
      <div className="status error">
        <p>Couldn't load products. {error}</p>
        <button onClick={loadProducts}>Try again</button>
      </div>
    );
  }

  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} title={p.title} price={p.price} image={p.image} />
      ))}
    </div>
  );
}

export default ProductList;