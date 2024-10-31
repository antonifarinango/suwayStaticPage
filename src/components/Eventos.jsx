import React from "react";
import "../style/eventos.css";

import CardEventos from "../props/cardEventos";
import img1Eventos from "../assets/img/eventos/325411374_731263904863152_1275043535596314209_n.jpg";
import img2Eventos from "../assets/img/eventos/img_1_1730292449005.jpg"
import img3Eventos from "../assets/img/eventos/img_3_1730292480547.jpg"
import img4Eventos from "../assets/img/eventos/img_4_1730292494883.jpg"
import img5Eventos from "../assets/img/eventos/img_5_1730292517336.jpg"
import img6Eventos from "../assets/img/eventos/img_6_1730292544804.jpg"
import img7Eventos from "../assets/img/eventos/img_7_1730292566576.jpg"
import img8Eventos from "../assets/img/eventos/img_8_1730292579396.jpg"
import img9Eventos from "../assets/img/eventos/img_9_1730292607360.jpg"
import img10Eventos from "../assets/img/eventos/img_10_1730292656310.jpg"
import img11Eventos from "../assets/img/eventos/img_11_1730292669404.jpg"
import img12Eventos from "../assets/img/eventos/img_12_1730292692336.jpg"
import img13Eventos from "../assets/img/eventos/img_13_1730292713932.jpg"


function Eventos() {
  return (
    <div
      className="contenedorEventos h-100 
      container-fluid"
    >
      <div className="eventos  d-flex justify-content-center gap-3">
        <CardEventos img={img1Eventos} descripcion="jjj" />
        <CardEventos img={img2Eventos} descripcion="jjj" />
        <CardEventos img={img3Eventos} descripcion="jjj" />
        <CardEventos img={img4Eventos} descripcion="jjj" />
        <CardEventos img={img5Eventos} descripcion="jjj" />
        <CardEventos img={img6Eventos} descripcion="jjj" />
        <CardEventos img={img7Eventos} descripcion="jjj" />
        <CardEventos img={img8Eventos} descripcion="jjj" />
        <CardEventos img={img9Eventos} descripcion="jjj" />
        <CardEventos img={img10Eventos} descripcion="jjj" />
        <CardEventos img={img11Eventos} descripcion="jjj" />
        <CardEventos img={img12Eventos} descripcion="jjj" />
        <CardEventos img={img13Eventos} descripcion="jjj" />
      </div>
    </div>
  );
}

export default Eventos;
