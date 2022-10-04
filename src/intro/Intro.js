import React, { useState } from "react";
import VideoWraper from "../components/VideoWraper";
import "./../App.css";
import "./Intro.css";
import { useNavigate } from "react-router-dom";
import "@animxyz/core";
import { XyzTransition } from "@animxyz/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Intro() {
  const navigate = useNavigate();

  return (
    <>
      <div className="intro__videoContainer">
        <VideoWraper
          source1={
            "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/loopIntro-sr.mp4"
          }
          source2=""
          clase={"videoIntro"}
        ></VideoWraper>
      </div>
      <div className="intro__tituloContainer">
        <h1>
          <span className="span_black">Visita</span> cantada
        </h1>
        <h2 onClick={() => navigate("/procuraduria")}>
          comenzar <FontAwesomeIcon className="play-icon" icon={faPlay} />
        </h2>
      </div>
    </>
  );
}
