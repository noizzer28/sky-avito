import * as S from "./app.styles";
import { AppRoutes } from "./components/routes/routes";

function App() {
  return (
    <>
      <S.GlobalStyles />
      <S.Wrapper>
        <S.Container>
          <AppRoutes></AppRoutes>
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default App;
