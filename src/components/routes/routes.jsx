import { Routes, Route } from "react-router-dom";
import { Main } from "../../pages/main/main";
import { Profile } from "../../pages/profile/profile";
import { ProtectedRoute } from "./protectedRoute";
import { Article } from "../../pages/article/article";
import { SellerProfile } from "../../pages/sellerProfile/sellerProfile";
import { Login } from "../../pages/login/login";
import { Register } from "../../pages/login/register";
import { Modal } from "../../pages/modals/newModal";
import { FeedbackModal } from "../../pages/modals/feedbacks";
import { ReviewsModal } from "../../pages/modals/reviews";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="article" element={<Article />} />
      <Route path="sellerProfile" element={<SellerProfile />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/feedback" element={<FeedbackModal />}></Route>
      <Route path="/new" element={<Modal isNew={true} />}></Route>
      <Route path="/edit" element={<Modal isNew={false} />}></Route>
      <Route path="/comments" element={<ReviewsModal />}></Route>
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
