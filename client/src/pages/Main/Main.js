import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ProductsBanners } from "../../components/ProductsBanners/ProductsBanners";
import { TopScroll } from "../../components/TopScroll/TopScroll";
import { fetchAndUpdateCatalog } from "../../helpers/fetchAndUpdateCatalog";
import useSEO from "../../hooks/useSEO";
import { setCatalog } from "../../redux/actions/catalog";
import racing_cyclists_video from "../../videos/racing-cyclists2.mp4";
import "./Main.css";
const { REACT_APP_API_CATALOG: CATALOG_URL, REACT_APP_TOKEN: token } =
  process.env;

export const Main = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation(["main"]);
  useSEO({ title: "Your bike shop!" });

  useEffect(() => {
    fetchAndUpdateCatalog(CATALOG_URL, dispatch, setCatalog, token);
  }, [setCatalog]);

  return (
    <div>
      <TopScroll />
      <div>
        <div className="outter-container">
          <div className="video-container">
            <div className="callout">
              <h1>{t("WELCOME_TO_BIKEVILLE!")}</h1>
              <Link className="link" to="/showroom">
                <button className="outline-btn">
                  <h2>{t("CHECK_OUR_PRODUCTS")}</h2>
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
