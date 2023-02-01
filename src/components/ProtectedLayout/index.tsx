import { useAuth } from "../../context/AuthProvider/useAuth";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  console.log("caraio");
  if (!auth.email) {
    return <h1>Você não possui acesso</h1>;
  }

  return children;
};
