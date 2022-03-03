import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/reducers/shoppingCartReducer";
import "./AddCartIcon.css";

export const AddCartIcon = ({ id }) => {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.catalog);

  const handleAddClick = () => {
    const addedProduct = catalog.filter((product) => product.product_id === id);

    dispatch(
      addProduct({
        ...addedProduct,
      })
    );
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
