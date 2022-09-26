import logo from "./logo.svg";
import "./App.css";
import Intro from "./intro/Intro";
import Header from "./layout/Header";
import Nav from "./layout/Nav";
import Home from "./secciones/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  HashRouter,
  Link,
  Router,
} from "react-router-dom";
import SalaArana from "./secciones/SalaArana";
import Procuraduria from "./secciones/Procuraduria";
import PaginaConstruccion from "./secciones/PaginaContruccion";
import { useState } from "react";
function App() {
  const [scrollToGA, setScrollToGA] = useState(false);
  const manejarScrollToGA = () => setScrollToGA(true);
  /*(scrollToGA) => !scrollToGA*/
  const resetScroll = () => {
    setScrollToGA(false);
    console.log("entra");
  };
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Intro />}></Route>
          <Route
            exact
            path="/home"
            element={
              <>
                <Header />
                <Nav />
                <Home />
              </>
            }
          ></Route>
          <Route
            exact
            path="/salaArana"
            element={
              <>
                <Header />
                <Nav />
                <SalaArana />
              </>
            }
          ></Route>
          <Route
            exact
            path="/procuraduria"
            element={
              <>
                <Header />
                <Nav manejarScroll={manejarScrollToGA} />
                <Procuraduria
                  scrollToGA={scrollToGA}
                  resetScroll={resetScroll}
                />
              </>
            }
          ></Route>
          <Route
            exact
            path="/procuraduriaGA"
            element={
              <>
                <Header />
                <Nav manejarScroll={manejarScrollToGA} />
                <Procuraduria
                  scrollToGA={scrollToGA}
                  resetScroll={resetScroll}
                />
              </>
            }
          ></Route>
          <Route
            exact
            path="/pagina"
            element={
              <>
                <Header />
                <Nav />
                <PaginaConstruccion />
              </>
            }
          ></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
