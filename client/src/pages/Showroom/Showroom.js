import { useSelector } from "react-redux";
import { Newsletter } from "../../components/Newsletter/Newsletter";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { ProductFilter } from "../../components/ProductFilter/ProductFilter";
import { TopScroll } from "../../components/TopScroll/TopScroll";
import useSEO from "../../hooks/useSEO";
import { setCatalog } from "../../redux/actions/catalog";
import { setFilteredCatalog } from "../../redux/actions/filterCatalog";
import "./Showroom.css";

export const Showroom = () => {
  const catalog = useSelector((state) => state.catalog);
  useSEO({ title: "Showroom" });

  return (
    <div className="lola">
      <TopScroll />
      <div className="main-container">
        <ProductFilter
          catalog={catalog}
          setCatalog={setCatalog}
          setFilteredCatalog={setFilteredCatalog}
        />
        {catalog?.map((product) => {
          return (
            <ProductCard
              key={product.product_id}
              id={product.product_id}
              {...product}
            />
          );
        })}
      </div>

      <div>
        <Newsletter />
      </div>
    </div>
  );
};
