import { Link } from "react-router-dom";
import * as S from "./login.styles";
import { DarkBG } from "../../app.styles";

export function Login() {
  const isLoading = false;
  const error = false;
  return (
    <S.ModalWrapper className="container-enter">
      <S.ModalBlock className="modal__block">
        <S.ModalForm className="modal__form-login" id="formLogIn" action="#">
          <Link to="/login">
            <S.ModalLogo>
              <img src="/img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
          </Link>
          <S.Inputs>
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
          <S.Buttons>
            <S.PrimaryButton disabled={isLoading ? true : false}>
              Войти
            </S.PrimaryButton>
            <Link to="/register">
              <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
            </Link>
          </S.Buttons>
        </S.ModalForm>
      </S.ModalBlock>
    </S.ModalWrapper>
  );
}
