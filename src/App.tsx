import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { routes } from "./routes";
import "./App.css";
import { FormContextProvider } from "./context/userContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routes.home}
          element={
            <FormContextProvider>
              <Home />
            </FormContextProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
