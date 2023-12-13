import { Routes, Route } from "react-router-dom";
import { Main } from "../../pages/main/main";
import { Profile } from "../../pages/profile/profile";
import { ProtectedRoute } from "./protectedRoute";
import { Article } from "../../pages/article/article";
import { SellerProfile } from "../../pages/sellerProfile/sellerProfile";
import { Login } from "../../pages/login/login";
import { Register } from "../../pages/login/register";
import { EditModal } from "../../pages/modals/newModal";
import { FeedbackModal } from "../../pages/modals/feedbacks";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="article" element={<Article />} />
      <Route path="sellerProfile" element={<SellerProfile />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/feedback" element={<FeedbackModal />}></Route>
      <Route path="/new" element={<EditModal isEdit={true} />}></Route>
      <Route path="/edit" element={<EditModal isEdit={false} />}></Route>
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
