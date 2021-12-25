import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AddCartButton.css";

export default function AddCartButton() {
  return (
    <button className="add-cart-btn">
      <FontAwesomeIcon className="add-cart-icon" icon={faShoppingCart} />
      ADD TO CART
    </button>
  );
}
