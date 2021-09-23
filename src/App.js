import React, { useContext, useEffect } from 'react';
import InitialButton from './components/InitialButton';
import WhatsappForm from './components/WhatsappForm';
import "./App.css"
import { WidgetContext } from './context/widgetContext';

const App = () => {

    const { utms, processUtms } = useContext(WidgetContext)

    useEffect(()=>{
        console.log("primera antes del if")
        console.log(utms)
        if (sessionStorage.getItem("utmsConcatenated")){
            console.log("segunda en el IF verdadero")
            console.log(utms)
            let utmsConcat = sessionStorage.getItem('utmsConcatenated')
            processUtms(utmsConcat)

        }else{
            console.log("segunda en el IF falso")
            console.log(utms)
            let queryString = window.location.search;
            sessionStorage.setItem("utmsConcatenated",queryString)
        }
    },[])

    return (
        <div className="container">
            <WhatsappForm></WhatsappForm>
            <InitialButton></InitialButton>
        </div>
    );
};

export default App;