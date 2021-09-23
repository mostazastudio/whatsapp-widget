import React, { createContext, useState } from "react";

const WidgetContext = createContext();

const WidgetProvider = ({children}) =>{

    const [whatsappOpen, setWhatsappOpen] = useState(false)

    const openWhatsapp = () => {
        setWhatsappOpen(!whatsappOpen)
    }

    const data = {  whatsappOpen, openWhatsapp }   
    
    return (
        <WidgetContext.Provider value={data}>
            {children}
        </WidgetContext.Provider>
    )

}

export {WidgetContext}
export default WidgetProvider;