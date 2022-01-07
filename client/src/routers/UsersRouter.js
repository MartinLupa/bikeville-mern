import React from "react";
import { Route, Routes } from "react-router-dom";
// import Pay from "../pages/Pay/Pay";
// import Success from "../pages/Success/Success";
import PublicRouter from "./PublicRouter";

export const UsersRouter = () => {
  return (
    <>
      <Routes>
        <PublicRouter />
        {/* <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<Success />} /> */}
      </Routes>
    </>
  );
};
