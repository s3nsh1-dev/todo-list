import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { GlobalProvider } from "./context/GlobalContext.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <GlobalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalProvider>
  </Provider>
);
