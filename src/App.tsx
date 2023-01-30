import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register/Register";
import { routes } from "./routes";
import "./App.css";
import { FormContextProvider } from "./context/userContext";
import { Home } from "./pages/Home/Home";
import LoginForm from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routes.login}
          element={
            <FormContextProvider>
              <LoginForm />
            </FormContextProvider>
          }
        />
        <Route
          path={routes.register}
          element={
            <FormContextProvider>
              <Register />
            </FormContextProvider>
          }
        />
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
