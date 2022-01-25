import React, { useEffect, useState } from "react";
import { ProductsList } from "./ProductsList";
import { UpdateProductsForm } from "./UpdateProductsForm";

export const UpdateProductsView = () => {
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {}, [currentProduct]);

  return (
    <div className="update-container">
      <UpdateProductsForm currentProduct={currentProduct} />
      <ProductsList setCurrentProduct={setCurrentProduct} />
    </div>
  );
};
