import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useContext } from "react";
import { GlobalContext } from "../../App";
import "./AddCartIcon.css";

export default function AddCartIcon({ id }) {
  const { setShoppingCart, catalog, shoppingCart } = useContext(GlobalContext);
  const handleAddClick = () => {
    const addedProduct = catalog.filter((product) => product.product_id === id);
    setShoppingCart((previousCart) => [...previousCart, addedProduct]);
  };

  return (
    <div className="add-icon-container">
      <ShoppingCartOutlinedIcon
        onClick={handleAddClick}
        id={id}
        fontSize="large"
      />
    </div>
  );
}
