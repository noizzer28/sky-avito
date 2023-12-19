import { useDispatch, useSelector } from "react-redux";
import * as S from "./login.styles";
import {
  setUserData,
  setPassword,
  setLogin,
  setError,
} from "../../components/store/userSlice";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { RegisterApi, LoginApi } from "../../components/store/userSlice";

export function Register() {
  const { password, email, error, loading, status } = useSelector(
    (state) => state.user
  );
  const [userName, setName] = useState();
  const [repPass, setRepPass] = useState();
  const [surName, setLastName] = useState();
  const [city, setCity] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!password || !email || !repPass) {
      dispatch(setError(`Обязательные поля должны быть заполнены`));
      return;
    }
    if (password !== repPass) {
      dispatch(setError(`Введенные пароли не совпадают`));
      return;
    }
    try {
      const data = await dispatch(
        RegisterApi({
          email,
          password,
          city,
          userName,
          surName,
        })
      );
      if (status === "fulfilled") {
        const authData = await dispatch(LoginApi({ email, password }));
        const user = {
          refresh_token: authData.payload.refresh_token,
          access_token: authData.payload.access_token,
          email: email,
        };
        localStorage.setItem("token", JSON.stringify(user));
      }
      navigate("/");
    } catch (error) {
      setError(`Ошибка: ${error.message}`);
    }
  };

  return (
    <S.ModalWrapper data-id="wrapper">
      <S.ModalBlock data-id="modal-block">
        <S.Modal data-id="modal">
          <Link to="/">
            <S.ModalLogo data-id="modalLogo">
              <img src="/img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
          </Link>
          <S.Inputs data-id="input" autoComplete="off">
            <S.ModalInput
              type="text"
              name="login"
              placeholder="Почта"
              autoComplete="login"
              onChange={(e) => {
                dispatch(setLogin(e.target.value));
              }}
            />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
              autoComplete="password"
              onChange={(e) => {
                dispatch(setPassword(e.target.value));
              }}
            />
            <S.ModalInput
              type="password"
              name="repeat-password"
              placeholder="Повторите пароль"
              onChange={(e) => {
                setRepPass(e.target.value);
              }}
            />
            <S.ModalInput
              type="text"
              name="name"
              placeholder="Имя (необязательно)"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <S.ModalInput
              type="text"
              name="last-name"
              placeholder="Фамилия (необязательно)"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <S.ModalInput
              type="text"
              name="city"
              placeholder="Город (необязательно)"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </S.Inputs>
          {error && <S.Error>{error}</S.Error>}
          <S.Buttons data-id="buttons">
            <S.PrimaryButton
              disabled={loading ? true : false}
              onClick={handleRegister}
            >
              Зарегистрироваться
            </S.PrimaryButton>
            <Link to="/login">
              <S.SecondaryButton>Войти</S.SecondaryButton>
            </Link>
          </S.Buttons>
        </S.Modal>
      </S.ModalBlock>
    </S.ModalWrapper>
  );
}
