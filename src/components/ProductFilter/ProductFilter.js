import "./ProductFilter.css";

export default function ProductFilter() {
  return (
    <div className="product-filter-container">
      <div className="left"></div>
      <div className="center">
        <input type="text" placeholder="Filter product by name" />
      </div>
      <div className="right">
        <select name="" id="">
          <option value="">By name A-Z</option>
          <option value="">Price: Higher first</option>
          <option value="">Price: Lower first</option>
        </select>
      </div>
    </div>
  );
}
