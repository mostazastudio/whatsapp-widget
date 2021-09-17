import React, { createContext, useState } from "react";

const widgetContext = createContext();

const widgetProvider = ({children}) =>{

    const [whatsappOpen, setWhatsappOpen] = useState(false)
    const [whatsappClase, setWhatsappClase] = useState("formulario")
    const [botonClase, setBotonClase] = useState("boton")

    const openWhatsapp = () =>{
        setWhatsappOpen(!whatsappOpen)
        if(whatsappOpen){
            setWhatsappClase("formulario open")
            setBotonClase("boton close")
        }else{
            setWhatsappClase("formulario")
            setBotonClase("boton")
        }
    }

    const data = {openWhatsapp }   
    
    return (
        <widgetContext.Provider value={data}>
            {children}
        </widgetContext.Provider>
    )

}

export {widgetContext}
export default widgetProvider;