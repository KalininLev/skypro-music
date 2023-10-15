import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { MainPage } from "./pages/main";
import { PageNotFound } from "./pages/not-found";
import { SignIn } from "./pages/sign-in";
import { SignUp } from "./pages/sign-up";
import { MyPlaylist } from "./pages/playlist";
import { MyCategory } from "./pages/categories";

export function ProtectedRoute({ redirectPath = "/login", isAllowed }) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute isAllowed={Boolean(localStorage.getItem("user"))} />
        }
      >
        <Route path="/" element={<MainPage />} />
        <Route path="/favorites" element={<MyPlaylist />} />
        <Route path="/category/:id" element={<MyCategory />} />
      </Route>
      <Route path="/login" element={<SignIn />} />
      <Route path="/registration" element={<SignUp />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
