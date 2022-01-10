import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Pay } from "../pages/Pay/Pay";
import { ShoppingCart } from "../pages/ShoppingCart/ShoppingCart";
import { Success } from "../pages/Success/Success";
import { PublicRouter } from "./PublicRouter";

export const UsersRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/shopping_cart/:userId" element={<ShoppingCart />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<Success />} />
        <Route path="/*" element={<PublicRouter />} />
      </Routes>
    </BrowserRouter>
  );
};
