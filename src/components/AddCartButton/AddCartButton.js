import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
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
      <ShoppingCartOutlinedIcon fontSize="small" className="add-cart-icon" />
      ADD TO CART
    </button>
  );
}
