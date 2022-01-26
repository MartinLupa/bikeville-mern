import React, { useState } from "react";
import { ProductsList } from "./ProductsList";
import { UpdateProductsForm } from "./UpdateProductsForm";

export const UpdateProductsView = () => {
  const [currentProduct, setCurrentProduct] = useState({});
  return (
    <div className="update-container">
      <UpdateProductsForm currentProduct={currentProduct} />
      <ProductsList setCurrentProduct={setCurrentProduct} />
    </div>
  );
};
