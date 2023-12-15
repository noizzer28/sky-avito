import { Link, Navigate, useNavigate } from "react-router-dom";
import * as S from "./login.styles";
import {
  setLogin,
  setPassword,
  setError,
} from "../../components/store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { LoginApi } from "../../components/store/userSlice";
import { useState } from "react";

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { password, login, status, error, loading } = useSelector(
    (state) => state.user
  );

  const handleLogin = async () => {
    if (!password || !login) {
      dispatch(setError(`Все поля должны быть заполнены`));
      return;
    }
    try {
      const data = await dispatch(LoginApi({ login, password }));
      console.log("data", data);
      console.log(status);

      const user = {
        refresh_token: data.payload.refresh_token,
        access_token: data.payload.access_token,
        email: login,
      };
      console.log(user);
      localStorage.setItem("token", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.log("ERROR", error);
      setError(`Ошибка: ${error.message}`);
    }
  };

  return (
    <S.ModalWrapper data-id="modal-wrapper">
      <S.ModalBlock data-id="modal__block">
        <S.Modal data-id="modal">
          <Link to="/">
            <S.ModalLogo>
              <img src="/img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
          </Link>
          <S.Inputs data-id="inputs">
            <S.ModalInput
              type="text"
              name="login"
              placeholder="Почта"
              value={login}
              autoComplete={login}
              onChange={(e) => {
                dispatch(setLogin(e.target.value));
              }}
            />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              autoComplete={password}
              onChange={(e) => {
                dispatch(setPassword(e.target.value));
              }}
            />
          </S.Inputs>
          {error && <S.Error>{error}</S.Error>}
          <S.Buttons data-id="buttons">
            <S.PrimaryButton
              disabled={loading ? true : false}
              onClick={handleLogin}
            >
              Войти
            </S.PrimaryButton>
            <Link to="/register">
              <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
            </Link>
          </S.Buttons>
        </S.Modal>
      </S.ModalBlock>
    </S.ModalWrapper>
  );
}
