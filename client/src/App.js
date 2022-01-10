import { createContext, useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { UsersRouter } from "./routers/UsersRouter";

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

  return (
    <div className="app-container">
      <div>
        <GlobalContext.Provider
          value={{
            catalog,
            setCatalog,
            filteredCatalog,
            setFilteredCatalog,
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
          <UsersRouter />
        </GlobalContext.Provider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
