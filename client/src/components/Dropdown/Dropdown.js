import { useSelector } from "react-redux";
import "./Dropdown.css";

export const Dropdown = ({ searchText }) => {
  const filteredCatalog = useSelector((state) => state.filteredCatalog);

  return searchText ? <div className="dropdown"></div> : null;
};
