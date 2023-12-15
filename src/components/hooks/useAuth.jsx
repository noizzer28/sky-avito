import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import { useEffect } from "react";

export function useAuth() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("token"));
    if (userData) {
      dispatch(
        setUser({
          email: userData.email,
          accessToken: userData.access_token,
          refreshToken: userData.refresh_token,
        })
      );
    }
  }, [dispatch]);

  const email = useSelector((state) => state.user.email);
  return {
    isAuth: !!email,
  };
}
