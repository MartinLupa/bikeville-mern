import { Route, Routes } from "react-router-dom";
import { Contact } from "../pages/Contact/Contact";
import { Main } from "../pages/Main/Main";
import { NotFound } from "../pages/NotFound/NotFound";
import { ProductDetails } from "../pages/ProductDetails/ProductDetails";
import { RegistrationAndLogin } from "../pages/RegistrationAndLogin/RegistrationAndLogin";
import { Showroom } from "../pages/Showroom/Showroom";

export const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/showroom" element={<Showroom />} />
        <Route
          path="/product_details/:productId"
          element={<ProductDetails />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<RegistrationAndLogin />} />
        <Route path="/login" element={<RegistrationAndLogin />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
