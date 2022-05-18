import React from "react";
import VideoWraper from "../components/VideoWraper";
import "./../App.css";
import "./Intro.css";

export default function Intro() {
  return (
    <>
      <div className="videoContainer">
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
      <div className="tituloContainer">
        <h1>
          <span className="span_black">Visita</span> cantada
        </h1>
      </div>
    </>
  );
}
