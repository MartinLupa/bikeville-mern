import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Main from "./pages/Main/Main";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import RegistrationAndLogin from "./pages/RegistrationAndLogin/RegistrationAndLogin";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/product_details/:productId"
            element={<ProductDetails />}
          />
          <Route path="/registration" element={<RegistrationAndLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shopping_cart/:userId" element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
