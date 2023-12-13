import { Link } from "react-router-dom";
import * as S from "./login.styles";

export function Login() {
  const isLoading = false;
  const error = false;
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
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </S.Inputs>
          {error && <S.Error>{error}</S.Error>}
          <S.Buttons data-id="buttons">
            <S.PrimaryButton disabled={isLoading ? true : false}>
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
