import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { GlobalContext } from "../../App";
import "./AddCartIcon.css";

export const AddCartIcon = ({ id }) => {
  const { setShoppingCart } = useContext(GlobalContext);
  const catalog = useSelector((state) => state.catalog);
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
};
