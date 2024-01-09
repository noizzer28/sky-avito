import * as S from "./app.styles";
import { AppRoutes } from "./components/routes/routes";
import { store } from "./components/store/store.jsx";
import { Provider } from "react-redux";
import TimeAgo from "javascript-time-ago";

import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(ru);

function App() {
  return (
    <>
      <Provider store={store}>
        <S.GlobalStyles />
        <S.Wrapper data-id="wrapper">
          <S.Container data-id="container">
            <AppRoutes></AppRoutes>
          </S.Container>
        </S.Wrapper>
      </Provider>
    </>
  );
}

export default App;
