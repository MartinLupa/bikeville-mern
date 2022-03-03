import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { show } from "../../redux/actions/popup";
import { addProduct } from "../../redux/reducers/shoppingCartReducer";
import "./AddCartIcon.css";

export const AddCartIcon = ({ id }) => {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.catalog);
  const shoppingCart = useSelector((state) => state.shoppingCart);

  const handleAddClick = () => {
    const addedProduct = catalog.filter((product) => product.product_id === id);
    const checkExisting = shoppingCart.products.some(
      (prod) => prod.product_id === addedProduct.product_id
    );
    if (checkExisting) {
      dispatch(show("This product is already in your shopping cart."));
    } else {
      dispatch(addProduct({ ...addedProduct, quantity: 1 }));
    }
  };

  console.log(shoppingCart);

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
