import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../App";
import { ProductsBanners } from "../../components/ProductsBanners/ProductsBanners";
import { TopScroll } from "../../components/TopScroll/TopScroll";
import { fetchAndUpdateCatalog } from "../../helpers/fetchAndUpdateCatalog";
import racing_cyclists_video from "../../videos/racing-cyclists2.mp4";
import "./Main.css";
const { REACT_APP_API_CATALOG: CATALOG_URL } = process.env;

export const Main = () => {
  const { setCatalog } = useContext(GlobalContext);

  useEffect(() => {
    fetchAndUpdateCatalog(CATALOG_URL, setCatalog);
  }, [setCatalog]);

  return (
    <div>
      <TopScroll />
      <div>
        <div className="outter-container">
          <div className="video-container">
            <div className="callout">
              <h1>WELCOME TO BIKEVILLE!</h1>
              <Link className="link" to="/showroom">
                <button className="outline-btn">
                  <h2>CHECK OUR PRODUCTS</h2>
                </button>
              </Link>
            </div>
          </div>
          <video loop autoPlay muted>
            <source src={racing_cyclists_video} type="video/mp4" />
          </video>
        </div>
        <ProductsBanners />
      </div>
    </div>
  );
};
