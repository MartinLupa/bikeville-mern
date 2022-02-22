import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCatalog } from "../../redux/actions/catalog";
import { setFilteredCatalog } from "../../redux/actions/filterCatalog";
import { Dropdown } from "../Dropdown/Dropdown";
import "./ProductFilter.css";

export const ProductFilter = () => {
  const catalog = useSelector((state) => state.catalog);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    dispatch(
      setFilteredCatalog(
        catalog.filter((product) =>
          product.model.toLowerCase().includes(searchText.toLowerCase())
        )
      )
    );
  };

  //Price sorting. Admits new criteria by adding new types.
  const sortCatalog = (type) => {
    const types = {
      by_price_higher_first: "full_price",
      by_price_lower_first: "full_price",
    };
    const sortProperty = types[type];
    let sortedCatalog;
    if (type === "by_price_higher_first") {
      sortedCatalog = [...catalog].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
    } else if (type === "by_price_lower_first") {
      sortedCatalog = [...catalog].sort(
        (a, b) => a[sortProperty] - b[sortProperty]
      );
    }
    dispatch(setCatalog(sortedCatalog));
  };

  const handleCloseDropdown = () => {
    setSearchText("");
  };

  return (
    <div className="product-filter-container">
      <div className="left"></div>
      <div className="center">
        <div className="search-bar">
          <input
            onChange={handleInputChange}
            type="text"
            name="searchText"
            autoComplete="off"
            placeholder="Filter product by name"
            value={searchText}
          />
          {searchText ? (
            <CloseOutlinedIcon
              onClick={handleCloseDropdown}
              className="search-bar-icon"
            />
          ) : (
            <SearchOutlinedIcon className="search-bar-icon" />
          )}
        </div>
        <div className="dropdown-container">
          <Dropdown searchText={searchText} setSearchText={setSearchText} />
        </div>
      </div>

      <div className="right">
        <select
          onChange={(e) => sortCatalog(e.target.value)}
          name="filter"
          id=""
        >
          <option value="by_price_higher_first">Price: Higher first</option>
          <option value="by_price_lower_first">Price: Lower first</option>
        </select>
      </div>
    </div>
  );
};
