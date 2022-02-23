import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { GlobalContext } from "../../App";
import "./AddCartButton.css";

export const AddCartButton = ({ id }) => {
  const { setShoppingCart } = useContext(GlobalContext);
  const catalog = useSelector((state) => state.catalog);

  const handleAddClick = () => {
    const addedProduct = catalog.filter((product) => product.product_id === id);
    setShoppingCart((previousCart) => [...previousCart, addedProduct]);
  };

  return (
    <button onClick={handleAddClick} id={id} className="add-cart-btn">
      <ShoppingCartOutlinedIcon fontSize="small" className="add-cart-icon" />
      ADD TO CART
    </button>
  );
};
