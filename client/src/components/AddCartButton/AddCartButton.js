import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { show } from "../../redux/actions/popup";
import { addProduct } from "../../redux/reducers/shoppingCartReducer";
import "./AddCartButton.css";

export const AddCartButton = ({ id }) => {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.catalog);
  const shoppingCart = useSelector((state) => state.shoppingCart);

  const handleAddClick = () => {
    const addedProduct = catalog.find((product) => product.product_id === id);
    Object.assign(addedProduct, { quantity: 1 });
    const cartProductIDs = shoppingCart.products.map((prod) => {
      return prod.product_id;
    });

    if (cartProductIDs.includes(addedProduct.product_id)) {
      dispatch(show("That product is already in your shopping cart."));
    } else {
      dispatch(addProduct({ ...addedProduct }));
    }
  };

  useEffect(() => {
    window.localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  return (
    <button onClick={handleAddClick} id={id} className="add-cart-btn">
      <ShoppingCartOutlinedIcon fontSize="small" className="add-cart-icon" />
      ADD TO CART
    </button>
  );
};
