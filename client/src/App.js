import { createContext, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useDispatch } from "react-redux";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { login } from "./redux/actions/auth";
import { addProduct } from "./redux/reducers/shoppingCartReducer";
import { PublicRouter } from "./routers/PublicRouter";

export const GlobalContext = createContext();

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

function App() {
  const dispatch = useDispatch();
  const [order, setOrder] = useState({
    products: [],
    courier_company: {},
    total: 0,
  });

  useEffect(() => {
    const initialUserState = JSON.parse(window.localStorage.getItem("user"));
    const initialCartState = JSON.parse(
      window.localStorage.getItem("shoppingCart")
    );
    if (initialUserState?.email) {
      dispatch(login(initialUserState));
    }
    if (initialCartState?.products.length > 0) {
      initialCartState.products.map((prod) => dispatch(addProduct(prod)));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app-container">
      <div className="app-content">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <GlobalContext.Provider
            value={{
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
