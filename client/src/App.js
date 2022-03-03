import { createContext, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { PublicRouter } from "./routers/PublicRouter";

export const GlobalContext = createContext();

// const init = () => {
//   return JSON.parse(localStorage.getItem("user")) || { logged: false };
// };

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
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
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <GlobalContext.Provider
            value={{
              shoppingCart,
              setShoppingCart,
              cartTotal,
              setCartTotal,
              order,
              setOrder,
            }}
          >
            <PublicRouter />
          </GlobalContext.Provider>
        </ErrorBoundary>
      </div>
      <Footer />
    </div>
  );
}

export default App;
