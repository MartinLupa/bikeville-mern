import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export const UsersRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/showroom" element={<Showroom />} />
        <Route
          path="/product_details/:productId"
          element={<ProductDetails />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shopping_cart/:userId" element={<ShoppingCart />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<Success />} />
        <Footer />
      </Routes>
    </>
  );
};
