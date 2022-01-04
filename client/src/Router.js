import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Contact from "./pages/Contact/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import Pay from "./pages/Pay/Pay";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import RegistrationAndLogin from "./pages/RegistrationAndLogin/RegistrationAndLogin";
import Showroom from "./pages/Showroom/Showroom";
import Success from "./pages/Success/Success";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/showroom" element={<Showroom />} />
        <Route
          path="/product_details/:productId"
          element={<ProductDetails />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<RegistrationAndLogin />} />
        <Route path="/login" element={<RegistrationAndLogin />} />
        <Route path="/shopping_cart/:userId" element={<ShoppingCart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<Success />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
