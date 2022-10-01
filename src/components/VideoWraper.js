import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./VideoWrapper.css";
export default function VideoWraper({
  source1,
  clase,
  titulo,
  subtitulo,
  poster,
  linkTo,
}) {
  /* const [source, setSource] = useState(null)

    useEffect(() => {

    }, [])
 */
  return (
    <>
      <NavLink to={`${linkTo}`}>
        <div className={`videoWrapper ${clase}`}>
          <div className="videoWrapper__titulos">
            <h3>{titulo}</h3>
            {subtitulo && (
              <p className="videoWrapper__subtitulos">{subtitulo}</p>
            )}
          </div>

          <video autoPlay muted loop poster={poster}>
            <source src={source1} type="video/mp4"></source>
            {/*         <source src={source2} type="video/ogg"></source> */}
            tu navegador no es compatible con videos en html5
          </video>
        </div>
      </NavLink>
    </>
  );
}
