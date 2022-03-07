import { createContext, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { login } from "./redux/actions/auth";
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
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [order, setOrder] = useState({
    products: [],
    courier_company: {},
    total: 0,
  });

  useEffect(() => {
    const initialUserState = JSON.parse(localStorage.getItem("user"));
    console.log(initialUserState);
    if (initialUserState.email) {
      dispatch(login(initialUserState));
    }
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
