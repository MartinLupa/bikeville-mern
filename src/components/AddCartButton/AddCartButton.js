import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { GlobalContext } from "../../App";
import "./AddCartButton.css";

export default function AddCartButton({ id }) {
  const { setShoppingCart } = useContext(GlobalContext);
  const handleAddClick = ({ target }) => {
    // console.log(id);
    setShoppingCart((previousCart) => [...previousCart, id]);
  };

  return (
    <button onClick={handleAddClick} id={id} className="add-cart-btn">
      <FontAwesomeIcon className="add-cart-icon" icon={faShoppingCart} />
      ADD TO CART
    </button>
  );
}
