import React, { useState } from "react";
import VideoWraper from "../components/VideoWraper";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="salaArana">
        <div className="salaAraña__letrasGigantes">
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
        <div className="salaArana__containerImg">
          <img
            className="salaArana__img"
            src="https://visita-cantada.s3.sa-east-1.amazonaws.com/img/ara%C3%B1a.png"
          ></img>
          <div className="salaArana__containerTitulo">
            <h2 className="salaArana__titulo">Sala Araña</h2>
            <div className="salaArana__subrayTitulo"></div>
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
          <h2 className="salaArana__titulo salaArana__titulo--columnas">
            Sala Columnas
          </h2>
          <div className="salaArana__subrayTitulo salaArana__subrayTitulo--columnas"></div>
          <img
            className="salaArana__imgSalaColumnas"
            src="https://visita-cantada.s3.sa-east-1.amazonaws.com/img/columnas.png"
          ></img>
        </div>
      </div>
    </>
  );
}
