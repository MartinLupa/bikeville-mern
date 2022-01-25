import React from "react";
import { ProductsList } from "./ProductsList";
import { UpdateProductsForm } from "./UpdateProductsForm";

export const UpdateProductsView = () => {
  return (
    <div className="update-container">
      <UpdateProductsForm />
      <ProductsList />
    </div>
  );
};
