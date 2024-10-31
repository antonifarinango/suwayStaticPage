import React, { useEffect, useState,useRef } from "react";
import "../style/inicio.css"
import { Link } from "react-router-dom";
import img1 from "../assets/img/carrusel/264253483_4032851020148529_7823300542199264182_n.jpg"
import img2 from "../assets/img/carrusel/264678176_4032849660148665_7309444745426065121_n.jpg"
import img3 from "../assets/img/carrusel/293815736_462596715869229_7915158813404897227_n.jpg"
import img4 from "../assets/img/carrusel/361975269_772001371595427_4087177814002978619_n.jpg"
import img5 from "../assets/img/carrusel/363798665_772001201595444_3220363720252761160_n.jpg"

function Inicio (){

    const [carruselBtn1 ,setCarruselBtn1] = useState(false);
    const [carruselBtn2 ,setCarruselBtn2] = useState(false);
    const animacionBtn1 = () =>{

        setCarruselBtn1(!carruselBtn1);

    }
    const animacionBtn2 = () =>{

        setCarruselBtn2(!carruselBtn2);

    }

    const imagenes = [img1, img2, img3, img4, img5];

    const [indiceActual, setIndiceActual] = useState(0);
    const intervaloRef = useRef(null); 

    useEffect(()=>{

        const cambiarImagen = () => {
            setIndiceActual((indexActual) => (indexActual + 1) % imagenes.length);
        };

        intervaloRef.current = setInterval(cambiarImagen, 4000);

        return () => clearInterval(intervaloRef.current);
    },[imagenes.length])
    
    const siguienteImagen = () =>{
        setIndiceActual((indexActual) => (indexActual + 1) % imagenes.length);
    }

    const imagenAnterior = () =>{
        setIndiceActual((indexActual) => (indexActual - 1 + imagenes.length) % imagenes.length);
    }


    return(
        <>
        <div className="inicio">
            <div className="div-content container d-flex w-100 flex-column justify-content-center aling-items-center">
                <div className="eventos-inicio d-flex justify-content-center align-items-center">

                    <div className="img-evento d-flex align-items-center justify-content-between">
                        
                    <button 
                    onClick={imagenAnterior}
                    onMouseEnter={animacionBtn1}
                    onMouseLeave={animacionBtn1} className={`carrusel-btn ${carruselBtn1 ? 'carrusel-btn-active' : 'carrusel-btn' }`}>{"<"}</button>

                    <img className="img"  src={imagenes[indiceActual]} alt="" />
                    
                    <button 
                    onClick={siguienteImagen}
                    onMouseEnter={animacionBtn2}
                    onMouseLeave={animacionBtn2} className={`carrusel-btn ${carruselBtn2 ? 'carrusel-btn-active' : 'carrusel-btn' }`}>{">"}</button>
                    </div>
                    
                    
                </div>
                <div className="proximos-eventos d-flex justify-content-center align-items-center">
                    <Link className="proximos-eventos-btn btn font" to="eventos">Proximos Eventos</Link>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Inicio













