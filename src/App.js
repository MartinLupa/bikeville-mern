import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useEffect, useState } from "react";
import "./App.css";
import Router from "./Router";

export const GlobalContext = createContext();

function App() {
  const [catalog, setCatalog] = useState();
  const [productID, setProductID] = useState();

  useEffect(() => {
    console.log("APP", catalog);
  });

  return (
    <div>
      <GlobalContext.Provider
        value={{ catalog, setCatalog, productID, setProductID }}
      >
        <Router />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
