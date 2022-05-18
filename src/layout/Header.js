import React from "react";
import "./../App.css";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="tituloContainer tituloContainer--header">
        <h1>
          <span className="span_black">Visita</span> cantada
        </h1>
      </div>
      <div className="videoContainer"></div>
    </>
  );
}
