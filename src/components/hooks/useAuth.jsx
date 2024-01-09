import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import { useEffect } from "react";

export function useAuth() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("token"));
    if (userData) {
      dispatch(
        setUser({
          email: userData.email,
          accessToken: userData.access_token,
          refreshToken: userData.refresh_token,
          password: userData.password,
        })
      );
    }
  }, [dispatch]);

  return {
    isAuth: !!email,
  };
}
