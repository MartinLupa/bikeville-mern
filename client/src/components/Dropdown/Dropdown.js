import { useSelector } from "react-redux";
import "./Dropdown.css";
import { ProductInfo } from "./ProductInfo";

export const Dropdown = ({ searchText }) => {
  const filteredCatalog = useSelector((state) => state.filteredCatalog);
  console.log(filteredCatalog);

  return searchText ? (
    <div className="dropdown">
      {filteredCatalog?.map((product) => (
        <ProductInfo product={product} />
      ))}
    </div>
  ) : null;
};
