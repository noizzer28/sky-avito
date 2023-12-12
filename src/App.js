import * as S from "./app.styles";
import { AppRoutes } from "./components/routes/routes";

function App() {
  return (
    <>
      <S.GlobalStyles />
      <S.Wrapper data-id="wrapper">
        <S.Container data-id="container">
          <AppRoutes></AppRoutes>
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default App;
