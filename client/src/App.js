import { createContext, useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { PublicRouter } from "./routers/PublicRouter";

export const GlobalContext = createContext();

function App() {
  const [catalog, setCatalog] = useState();
  const [productID, setProductID] = useState();
  const [shoppingCart, setShoppingCart] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState();
  const [cartTotal, setCartTotal] = useState(0);
  const [order, setOrder] = useState({
    products: [],
    courier_company: {},
    total: 0,
  });
  const [user, setUser] = useState();

  //JSON.parse of something null, returns null. So I need an or conditional to render an empty array if there are no items in the shoppingCart, otherwise app will crash.
  useEffect(() => {
    setShoppingCart(JSON.parse(localStorage.getItem("shoppingCart")) || []);
    setUser(JSON.parse(localStorage.getItem("loggedUser")) || undefined);
  }, []);

  return (
    <div className="app-container">
      <div>
        <GlobalContext.Provider
          value={{
            catalog,
            setCatalog,
            //TO COMPARE:
            // filteredCatalog,
            // setFilteredCatalog,
            productID,
            setProductID,
            shoppingCart,
            setShoppingCart,
            cartTotal,
            setCartTotal,
            order,
            setOrder,
            user,
            setUser,
          }}
        >
          <PublicRouter
            filteredCatalog={filteredCatalog}
            setFilteredCatalog={setFilteredCatalog}
          />
        </GlobalContext.Provider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
