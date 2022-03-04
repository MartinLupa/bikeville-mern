import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ProductsBanners } from "../../components/ProductsBanners/ProductsBanners";
import { TopScroll } from "../../components/TopScroll/TopScroll";
import { setCatalog } from "../../redux/actions/catalog";
import racing_cyclists_video from "../../videos/racing-cyclists2.mp4";
import "./Main.css";
const { REACT_APP_API_CATALOG: CATALOG_URL } = process.env;

export const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(CATALOG_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDgyNzk2YTNlNzY5NzcwOTE0ZjVhOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTU1NjM5NiwiZXhwIjoxNzI3ODY5OTk2fQ.2It5EWX_Pvxh2Di3z5zJ9kbIoDcM7ejW96KX534wllg",
      },
    })
      .then((response) => response.json())
      .then((data) => dispatch(setCatalog(data)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
