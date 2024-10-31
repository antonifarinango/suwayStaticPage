import React, { useState, useEffect } from "react";
import "../style/encabezado.css";
import "../style/colores.css";
import { Link } from "react-router-dom";

function Encabezado() {
    const [toggle, setToggle] = useState(false); // Inicializa en false para que el menú esté oculto por defecto

    const toggleBtn = () => {
        setToggle(!toggle); // Cambia el estado entre visible y oculto
    };

    const closeMenu = () => {
        setToggle(false); // Cierra el menú hamburguesa
    };

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
    });

    useEffect(() => {
        // Función para actualizar el tamaño de la pantalla
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
            });
        };

        // Agrega el evento resize
        window.addEventListener('resize', handleResize);

        // Limpia el evento resize cuando el componente se desmonte
        return () => window.removeEventListener('resize', handleResize);
    }, []); // [] asegura que el efecto solo corra una vez

    return (
        <>
            <div className="encabezado container-fluid d-flex justify-content-center">
                <div className={`${windowSize.width < 800 ? 'container-menuHamburguer-off' : ''} ${toggle ? 'container-menuHamburguer-on' : ''}`}>
                    <nav className="nav-menuHamburguer-on nav">
                        <Link className="nav-link font text-light" to="/" onClick={closeMenu}>Inicio</Link>
                        <Link className="nav-link font text-light" to="sobreNosotros" onClick={closeMenu}>Sobre Nosotros</Link>
                        <Link className="nav-link font text-light" to="eventos" onClick={closeMenu}>Eventos</Link>
                    </nav>
                </div>
                <div className={`col-xl-6 col-lg-6 ${windowSize.width < 800 ? 'col-sm-6' : 'col-sm-5'} ${windowSize.width < 800 ? 'col-6' : 'col-3'} d-flex justify-content-center align-items-center`}>
                    <span className="text-encabezado display-4 text-light">Suway</span>
                </div>
                <div className={`col-xl-6 col-lg-6 ${windowSize.width < 800 ? 'col-sm-6' : 'col-sm-7'} ${windowSize.width < 800 ? 'col-6' : 'col-9'} d-flex justify-content-center align-items-center`}>
                    <nav className="container-menuHamburguer">
                        <div onClick={toggleBtn} className="container-line-menu">
                            <div className={toggle ? "line-menuHamburguer1" : "line-menuHamburguer"}></div>
                            <div className={toggle ? "line-menuHamburguer2" : "line-menuHamburguer"}></div>
                            <div className={toggle ? "line-menuHamburguer3" : "line-menuHamburguer"}></div>
                        </div>
                    </nav>

                    <nav className="nav-escritorio nav">
                        <Link className="nav-link font text-light" to="/" onClick={closeMenu}>Inicio</Link>
                        <Link className="nav-link font text-light" to="sobreNosotros" onClick={closeMenu}>Sobre Nosotros</Link>
                        <Link className="nav-link font text-light" to="eventos" onClick={closeMenu}>Eventos</Link>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Encabezado;


