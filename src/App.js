import logo from "./logo.svg";
import "./App.css";
import Intro from "./intro/Intro";
import Header from "./layout/Header";
import Nav from "./layout/Nav";
import Home from "./secciones/Home";

function App() {
  return (
    <>
      {/* <Intro></Intro> */}
      <Header></Header>
      <Nav></Nav>
      <Home></Home>
    </>
  );
}

export default App;
