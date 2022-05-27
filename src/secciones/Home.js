import React, { useState } from "react";
import VideoWraper from "../components/VideoWraper";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="homeSalaArana">
        <div className="homeSalaArana__letrasGigantes">
          <h3>visita cantada</h3>
          <br></br>
          <h3>sala columnas</h3>
          <br></br>
          <h3>sala araña</h3>
          <br></br>
          <h3>sala de representantes</h3>
          <br></br>
          <h3>patio de la procuraduría</h3>
        </div>
        <div className="homeSalaArana__containerImg">
          <img
            className="homeSalaArana__img"
            src="https://visita-cantada.s3.sa-east-1.amazonaws.com/img/ara%C3%B1a.png"
          ></img>
          <div className="homeSalaArana__containerTitulo">
            <h2 className="homeSalaArana__titulo">Sala Araña</h2>
            <div className="homeSalaArana__subrayTitulo"></div>
          </div>
          <VideoWraper
            source1={
              "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/lidiaLoop_edit.mp4"
            }
            clase={"videoHome videoHome--lidiaBorda"}
            titulo={"Lidia Borda"}
            linkTo={"/salaArana"}
          ></VideoWraper>
          <VideoWraper
            source1={
              "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/noeliaMoncadaLoop_edit.mp4"
            }
            clase={"videoHome videoHome--noeliaMoncada"}
            titulo={"Noelia Moncada"}
            linkTo={"/salaArana"}
          ></VideoWraper>
          <h2 className="homeSalaArana__titulo homeSalaArana__titulo--columnas">
            Sala Columnas
          </h2>
          <div className="homeSalaArana__subrayTitulo homeSalaArana__subrayTitulo--columnas"></div>
          <img
            className="homeSalaArana__imgSalaColumnas"
            src="https://visita-cantada.s3.sa-east-1.amazonaws.com/img/columnas.png"
          ></img>
        </div>
      </div>
    </>
  );
}
