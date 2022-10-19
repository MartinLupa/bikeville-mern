import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useDispatch } from "react-redux";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { login } from "./redux/actions/auth";
import { addProduct } from "./redux/reducers/shoppingCartReducer";
import { PublicRouter } from "./routers/PublicRouter";

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

  useEffect(() => {
    const initialUserState = JSON.parse(window.localStorage.getItem("user"));
    const initialCartState = JSON.parse(
      window.localStorage.getItem("shoppingCart")
    );
    if (initialUserState?.email) {
      dispatch(login(initialUserState));
    }
    if (initialCartState?.products?.length > 0) {
      initialCartState.products.map((prod) => dispatch(addProduct(prod)));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app-container">
      <div className="app-content">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <PublicRouter />
        </ErrorBoundary>
      </div>
      <Footer />
    </div>
  );
}

export default App;
