import React from 'react';
import "../App.css"

const InitialButton = () => {

    const { openWhatsapp, botonClase } = useContext(widgetContext)

    return (
        <div className={botonClase} id="initial-button">
            <button id="boton-inicial" onClick={() =>openWhatsapp }>Chatea con nosotros</button>
        </div>
    );
};

export default InitialButton;