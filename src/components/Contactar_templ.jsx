import React from "react";
import "../style/contactar.css";
import facebook from "../assets/img/contactos/facebook.png";
import whatsapp from "../assets/img/contactos/social.png";
import gmail from "../assets/img/contactos/gmail.png"

function Contactar() {
  return (
    <>
      <div className="div-redes mt-3 container-fluid  w-100 d-flex gap-5 justify-content-center ">
        <div className="redes col-2 rounded-circle">
          <a target="_blank" href="https://www.facebook.com/suwaycorazonjoven">
            <img src={facebook} alt="facebook" />
          </a>
        </div>
        <div className="redes col-2 rounded-circle">
          <a target="_blank" href="https://wa.me/5930992864004">
            <img src={whatsapp} alt="whatsapp" />
          </a>
        </div>
        <div className="redes div-gmail col-2 rounded-circle">
        <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=segundofarinango447@gmail.com">
            <img className="img-gmail " src={gmail} alt="gmail" />
        </a>
        </div>
        </div>
    </>
  );
}

export default Contactar;
