import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./VideoWrapper.css";
export default function VideoWraper({
  source1,
  clase,
  titulo,
  subtitulo,
  linkTo,
}) {
  /* const [source, setSource] = useState(null)

    useEffect(() => {

    }, [])
 */
  return (
    <>
      <div className={`videoWrapper ${clase}`}>
        <div className="videoWrapper__titulos">
          <h2>{titulo}</h2>
          {subtitulo && <p className="videoWrapper__subtitulos">{subtitulo}</p>}
        </div>

        <video autoPlay muted loop>
          <source src={source1} type="video/mp4"></source>
          {/*         <source src={source2} type="video/ogg"></source> */}
          tu navegador no es compatible con videos en html5
        </video>
      </div>
      <NavLink to={`${linkTo}`}></NavLink>
    </>
  );
}
