import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Contact } from "../pages/Contact/Contact";
import { Main } from "../pages/Main/Main";
import { NotFound } from "../pages/NotFound/NotFound";
import { Pay } from "../pages/Pay/Pay";
import { ProductDetails } from "../pages/ProductDetails/ProductDetails";
import { RegistrationAndLogin } from "../pages/RegistrationAndLogin/RegistrationAndLogin";
import { ShoppingCart } from "../pages/ShoppingCart/ShoppingCart";
import { Showroom } from "../pages/Showroom/Showroom";
import { Success } from "../pages/Success/Success";

export const PublicRouter = ({ ...props }) => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/showroom" element={<Showroom {...props} />} />
          <Route
            path="/product_details/:productId"
            element={<ProductDetails />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shopping_cart/:userId" element={<ShoppingCart />} />
          <Route path="/registration" element={<RegistrationAndLogin />} />
          <Route path="/login" element={<RegistrationAndLogin />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/success" element={<Success />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
