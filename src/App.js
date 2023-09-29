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
import Exactas from "./secciones/Exactas";
import Laboratorio from "./secciones/Laboratorio";
import PaginaConstruccion from "./secciones/PaginaContruccion";
import { useState } from "react";
//import Dimensions from "./components/Dimensions";
import Representantes from "./secciones/Representantes";
function App() {
  /*
  scrollToCol,
  scrollToArch,
  scrollToRepre,
  scrollToRosas,
  */
  const [scrollToGA, setScrollToGA] = useState(false);
  const [scrollToGB, setScrollToGB] = useState(false);
  const [scrollToCol, setScrollToCol] = useState(false);
  const [scrollToArch, setScrollToArch] = useState(false);
  const [scrollToRepre, setScrollToRepre] = useState(false);
  const [scrollToRosas, setScrollToRosas] = useState(false);
  const manejarScrollToGA = () => setScrollToGA(true);
  const manejarScrollToGB = () => setScrollToGB(true);
  const manejarScrollToCol = () => setScrollToCol(true);
  const manejarScrollToArch = () => setScrollToArch(true);
  const manejarScrollToRepre = () => setScrollToRepre(true);
  const manejarScrollToRosas = () => setScrollToRosas(true);
  /*(scrollToGA) => !scrollToGA*/
  const resetScroll = () => {
    console.log(scrollToGA);
    setScrollToGA(false);
    setScrollToGB(false);
    setScrollToCol(false);
  };

  /*<Dimensions></Dimensions>*/
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
            path="/procuraduriaGB"
            element={
              <>
                <Header />
                <Nav manejarScroll={manejarScrollToGB} />
                <Procuraduria
                  scrollToGB={scrollToGB}
                  resetScroll={resetScroll}
                />
              </>
            }
          ></Route>
          <Route
            exact
            path="/exactas"
            element={
              <>
                <Header />
                <Nav />
                <Exactas />
              </>
            }
          ></Route>
          <Route
            exact
            path="/laboratorio"
            element={
              <>
                <Header />
                <Nav />
                <Laboratorio />
              </>
            }
          ></Route>
          <Route
            exact
            path="/representantes"
            element={
              <>
                <Header />
                <Nav />
                <Representantes />
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
            path="/salaAranaColumnas"
            element={
              <>
                <Header />
                <Nav manejarScroll={manejarScrollToCol} />
                <SalaArana
                  scrollToCol={scrollToCol}
                  resetScroll={resetScroll}
                />
              </>
            }
          ></Route>
          <Route
            exact
            path="/salaAranaArchivo"
            element={
              <>
                <Header />
                <Nav manejarScroll={manejarScrollToArch} />
                <SalaArana
                  scrollToArch={scrollToArch}
                  resetScroll={resetScroll}
                />
              </>
            }
          ></Route>
          <Route
            exact
            path="/salaAranaSalaRosas"
            element={
              <>
                <Header />
                <Nav manejarScroll={manejarScrollToRosas} />
                <SalaArana
                  scrollToRosas={scrollToRosas}
                  resetScroll={resetScroll}
                />
              </>
            }
          ></Route>
          <Route
            exact
            path="/salaAranaPatioRosas"
            element={
              <>
                <Header />
                <Nav manejarScroll={manejarScrollToRosas} />
                <SalaArana
                  scrollToRosas={scrollToRosas}
                  resetScroll={resetScroll}
                />
              </>
            }
          ></Route>
          <Route
            exact
            path="/salaAranaRepresentantes"
            element={
              <>
                <Header />
                <Nav manejarScroll={manejarScrollToRepre} />
                <SalaArana
                  scrollToRepre={scrollToRepre}
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
