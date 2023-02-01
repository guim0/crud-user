import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register/Register";
import { routes } from "./routes";
import "./App.css";
import { FormContextProvider } from "./context/userContext";
import { Home } from "./pages/Home/Home";
import LoginForm from "./pages/Login/Login";
import { AuthProvider } from "./context/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProtectedLayout } from "./components/ProtectedLayout";

function App() {
  return (
    <>
      <AuthProvider>
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
      </AuthProvider>
      <ToastContainer />
    </>
  );
}

export default App;
