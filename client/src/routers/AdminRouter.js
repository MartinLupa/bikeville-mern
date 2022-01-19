import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";

export const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
