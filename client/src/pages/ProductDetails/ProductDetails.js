import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { AddCartButton } from "../../components/AddCartButton/AddCartButton";
import "./ProductDetails.css";

export const ProductDetails = () => {
  const catalog = useSelector((state) => state.catalog);
  const productID = useSelector((state) => state.productID);

  const filteredProduct = catalog?.filter(
    (product) => product.product_id === productID
  );

  const {
    model,
    image,
    description,
    type,
    brake_type,
    groupset,
    sizes,
    product_id,
  } = filteredProduct[0];

  return (
    <>
      <Helmet>
        <title data-react-helmet="true">`BikeVille | ${model}`</title>
        <meta
          data-react-helmet="true"
          name="description"
          content={`${model} product details. ${description}`}
        ></meta>
      </Helmet>
      <div className="details-container animate__animated animate__backInLeft">
        <img className="details-img" src={image} alt="" />
        <div className="details-info">
          <h1>{model}</h1>
          <p className="details-description">{description}</p>
          <h4>BIKE PRODUCT:</h4>
          <p>{type}</p>
          <hr />
          <h4>BRAKE TYPE:</h4>
          <p>{brake_type}</p>
          <hr />
          <h4>GROUP SET:</h4>
          <p>{groupset}</p>
          <hr />
          <h4>SIZES:</h4>
          <div className="details-size">
            {sizes?.map((size) => (
              <p key={size}>{size}</p>
            ))}
          </div>
          <div className="details-btn">
            <AddCartButton id={product_id} />
          </div>
        </div>
      </div>
    </>
  );
};
