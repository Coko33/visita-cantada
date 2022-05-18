import React, { useState } from "react";
import VideoWraper from "../components/VideoWraper";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="salaArana">
        <div className="salaArana__containerImg">
          <img
            className="salaArana__img"
            src="https://visita-cantada.s3.sa-east-1.amazonaws.com/img/ara%C3%B1a.png"
          ></img>
          <div className="salaArana__containetTitulo">
            <h2 className="salaArana__titulo">Sala Araña</h2>
            <div className="salaArana__subrayTitulo"></div>
          </div>
        </div>
        <VideoWraper
          source1={
            "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/lidiaLoop_edit.mp4"
          }
          clase={"lidiaBordaLoop"}
        ></VideoWraper>
      </div>
    </>
  );
}
