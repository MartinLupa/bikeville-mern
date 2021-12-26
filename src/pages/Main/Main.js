import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Main.css";

export default function Main() {
  const [catalog, setCatalog] = useState([]);
  useEffect(() => {
    fetch("catalog.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setCatalog(data.bicycles));
  }, []);

  return (
    <div className="main-container">
      {catalog.map((product) => {
        return (
          <ProductCard
            key={product.product_id}
            id={product.product_id}
            img={product.image}
            model={product.model}
            type={product.type}
            full_price={product.full_price}
          />
        );
      })}
    </div>
  );
}
