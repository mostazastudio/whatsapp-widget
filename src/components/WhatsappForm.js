import React, { useContext, useState } from 'react';
import "../App.css"
import { WidgetContext } from '../context/widgetContext';

const WhatsappForm = () => {

    const { whatsappOpen, openWhatsapp } = useContext(WidgetContext)

    const toggleWhatsapp = (estado) =>{
        var clase = ""
        if(estado){
            clase = "formulario open"
        }else{
            clase = "formulario"
        }
        return clase
    }

    return (
        <form className="form-whatsapp">
            <div className={toggleWhatsapp(whatsappOpen)} id="form-global">
                <div className="row">
                    <h3>¿Quieres contactar un asesor?</h3>
                    <span id="boton-close" onClick={() => openWhatsapp()}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg></span>
                </div>
                <p>Completa tus datos y te contactaremos un un experto</p>
                <label htmlFor="text_field">Tu Nombre</label>
                <input type="text" id="text_field" />
                <label htmlFor="number_field">Tu Celular</label>
                <input type="text" id="number_field" />
                <label htmlFor="select_field">Quieres ayuda de un asesor para:</label>
                <select id="select_field">
                    <option>Para hacer mi compra</option>
                    <option>Informacion sobre un peddio realizado</option>
                </select>
                <button>Contactar un asesor</button>
            </div>
        </form>
    );
};

export default WhatsappForm;