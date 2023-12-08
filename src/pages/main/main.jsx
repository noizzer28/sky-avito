import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Search } from "../../components/search/search";
import { Content } from "../../components/content/content";
import "./main.css";

export const Main = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Search></Search>
        <div className="main__container">
          <h2 className="main__h2">Объявления</h2>
          <Content></Content>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};
