import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import "./App.css";
import Router from "./Router";

export const GlobalContext = createContext();

function App() {
  const [catalog, setCatalog] = useState();

  return (
    <div>
      <GlobalContext.Provider value={{ catalog, setCatalog }}>
        <Router />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
