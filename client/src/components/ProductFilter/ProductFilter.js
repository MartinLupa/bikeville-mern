import { useContext } from "react";
import { GlobalContext } from "../../App";
import "./ProductFilter.css";

export default function ProductFilter() {
  const { catalog, setCatalog } = useContext(GlobalContext);

  //Price sorting
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
    // console.log("sorted catalog", sortedCatalog);
    setCatalog(sortedCatalog);
  };

  return (
    <div className="product-filter-container">
      <div className="left"></div>
      <div className="center">
        <input type="text" placeholder="Filter product by name" />
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
}
