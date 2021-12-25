import { useState } from "react";
import AddCartButton from "../../components/AddCartButton/AddCartButton";
import "./ProductDetails.css";

export default function ProductDetails() {
  const [detailedProduct, setDetailedProduct] = useState([]);

  return (
    <div className="details-container">
      <img
        className="details-img"
        src="https://www.cervelo.com/media/catalog/product/m/y/my22-dura-ace-di2-five-black.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=1200&canvas=1200:800"
        alt=""
      />

      <div className="details-info">
        <h1>Cervelo S5</h1>
        <p className="details-description">
          The new R5 frame is 130g lighter than the previous model—a 16%
          reduction from an already-light frame. And while aerodynamics weren't
          a focus with this frame the way they would be on an S5 or P5, bringing
          the cables inside reduced drag by 25g.
        </p>
        <h4>BIKE PRODUCT:</h4>
        <p>Complete bike</p>
        <hr />
        <h4>BRAKE TYPE:</h4>
        <p>Disc</p>
        <hr />
        <h4>GROUP SET:</h4>
        <p>Dura Ace Di2</p>
        <hr />
        <h4>SIZES:</h4>
        <div className="details-size">
          <p>48</p>
          <p>51</p>
          <p>54</p>
          <p>56</p>
          <p>58</p>
          <p>61</p>
        </div>
        <div className="details-btn">
          <AddCartButton />
        </div>
      </div>
    </div>
  );
}
