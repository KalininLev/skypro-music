import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "./routes";
import { UserContext } from "./contexts/authorizationContexts";

export function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  const logIn = (email, password) => {
    localStorage.setItem("user", JSON.stringify({ userName: email, password }));
    navigate("/", { replace: true });
  };

  return (
    <UserContext.Provider value={{ user, setUser, logIn, logOut }}>
      <AppRoutes />
    </UserContext.Provider>
  );
}
