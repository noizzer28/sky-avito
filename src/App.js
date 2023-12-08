import { Main } from "./pages/main/main";
import * as S from "./app.styles";

function App() {
  return (
    <>
      <S.GlobalStyles />
      <S.Wrapper>
        <S.Container>
          <Main></Main>
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default App;
