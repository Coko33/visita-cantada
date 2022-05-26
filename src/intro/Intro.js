import React from "react";
import VideoWraper from "../components/VideoWraper";
import "./../App.css";
import "./Intro.css";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();
  return (
    <>
      <div className="intro__videoContainer">
        <VideoWraper
          source1={
            "https://visita-cantada.s3.sa-east-1.amazonaws.com/otmlloop.mp4"
          }
          /* source1={
              "https://visita-cantada.s3.sa-east-1.amazonaws.com/Electrochongo+02_2.mp4"
            } */
          source2=""
          clase={"videoIntro"}
        ></VideoWraper>
      </div>
      <div className="intro__tituloContainer">
        <h1>
          <span className="span_black">Visita</span> cantada
        </h1>
        <h2 onClick={() => navigate("/home")}>comenzar</h2>
      </div>
    </>
  );
}
