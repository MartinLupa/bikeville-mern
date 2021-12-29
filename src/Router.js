import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Dashboard from "./pages/Dashboard/Dashboard";
import Main from "./pages/Main/Main";
import Pay from "./pages/Pay/Pay";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import RegistrationAndLogin from "./pages/RegistrationAndLogin/RegistrationAndLogin";
import Success from "./pages/Success/Success";

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
          <Route path="/login" element={<RegistrationAndLogin />} />
          <Route path="/shopping_cart/:userId" element={<ShoppingCart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
