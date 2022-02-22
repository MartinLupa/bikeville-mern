import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./Dropdown.css";
import { ProductInfo } from "./ProductInfo";

export const Dropdown = ({ searchText, setSearchText }) => {
  const filteredCatalog = useSelector((state) => state.filteredCatalog);
  let dropdownRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!dropdownRef?.current?.contains(event.target)) {
        setSearchText("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return searchText ? (
    <div ref={dropdownRef} className="dropdown">
      {filteredCatalog?.length > 0 ? (
        filteredCatalog?.map((product) => (
          <ProductInfo key={product.product_id} product={product} />
        ))
      ) : (
        <p className="alert">No products found!</p>
      )}
    </div>
  ) : null;
};
