import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProductID } from "../../redux/actions/productID";

export const ProductInfo = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDropdownClick = (id) => {
    dispatch(setProductID(id));
    navigate(`/product_details/${id}`);
  };

  return (
    <div
      onClick={() => handleDropdownClick(product.product_id)}
      className="product-info-container"
    >
      <div className="product-info-left">
        <img className="product-info-img" src={product.image} alt="" />
        <h4>{product.model}</h4>
      </div>
      <p>EUR {product.full_price}</p>
    </div>
  );
};
