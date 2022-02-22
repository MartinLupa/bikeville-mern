import { createContext, useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { PublicRouter } from "./routers/PublicRouter";

export const GlobalContext = createContext();

// const init = () => {
//   return JSON.parse(localStorage.getItem("user")) || { logged: false };
// };

function App() {
  // const [productID, setProductID] = useState();
  const [shoppingCart, setShoppingCart] = useState([]);
  const [qtyCounter, setQtyCounter] = useState(1);
  const [filteredCatalog, setFilteredCatalog] = useState();
  const [cartTotal, setCartTotal] = useState(0);
  const [order, setOrder] = useState({
    products: [],
    courier_company: {},
    total: 0,
  });

  // useEffect(() => {
  //   if (user.logged === false) return;
  //   localStorage.setItem("user", JSON.stringify(user));
  // }, [user]);

  return (
    <div className="app-container">
      <div className="app-content">
        <GlobalContext.Provider
          value={{
            filteredCatalog,
            setFilteredCatalog,
            // productID,
            // setProductID,
            shoppingCart,
            setShoppingCart,
            qtyCounter,
            setQtyCounter,
            cartTotal,
            setCartTotal,
            order,
            setOrder,
          }}
        >
          <PublicRouter />
        </GlobalContext.Provider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
