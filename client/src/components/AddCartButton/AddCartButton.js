import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/reducers/shoppingCartReducer";
import "./AddCartButton.css";

export const AddCartButton = ({ id }) => {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.catalog);
  const cart = useSelector((state) => state.shoppingCart);

  const handleAddClick = () => {
    const addedProduct = catalog.filter((product) => product.product_id === id);
    dispatch(addProduct(addedProduct));
  };

  console.log(cart);

  return (
    <button onClick={handleAddClick} id={id} className="add-cart-btn">
      <ShoppingCartOutlinedIcon fontSize="small" className="add-cart-icon" />
      ADD TO CART
    </button>
  );
};
