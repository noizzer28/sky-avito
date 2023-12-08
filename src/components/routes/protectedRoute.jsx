import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, redirectPath = "/login" }) => {
  const userData = true;
  console.log(userData);
  if (!userData) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};
