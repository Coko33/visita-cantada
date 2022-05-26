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

function App() {
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
            path="/salaArana"
            element={
              <>
                <Header />
                <Nav />
                <SalaArana />
              </>
            }
          ></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
