import useSEO from "../../hooks/useSEO";
import "./NotFound.css";

export const NotFound = () => {
  useSEO({ title: "404 - Not Found" });
  return (
    <div className="not-found-container">
      <h1>404 | This page could not be found.</h1>
    </div>
  );
};
