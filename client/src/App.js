import { createContext, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Router from "./Router";

export const GlobalContext = createContext();

function App() {
  const [catalog, setCatalog] = useState();
  const [productID, setProductID] = useState();
  const [shoppingCart, setShoppingCart] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState();

  return (
    <div className="app-container">
      <div>
        <GlobalContext.Provider
          value={{
            catalog,
            setCatalog,
            productID,
            setProductID,
            shoppingCart,
            setShoppingCart,
            filteredCatalog,
            setFilteredCatalog,
          }}
        >
          <Router />
        </GlobalContext.Provider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
