import { Routes, Route } from "react-router-dom";
import { Main } from "../../pages/main/main";
import { Profile } from "../../pages/profile/profile";
import { ProtectedRoute } from "./protectedRoute";
import { Article } from "../../pages/article/article";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="article" element={<Article />} />
      <Route
        path="profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
