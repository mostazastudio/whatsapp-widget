import React, { useContext, useEffect } from 'react';
import InitialButton from './components/InitialButton';
import WhatsappForm from './components/WhatsappForm';
import "./App.css"
import { WidgetContext } from './context/widgetContext';

const App = () => {

    const { utms, processUtms } = useContext(WidgetContext)

    useEffect(()=>{
        console.log(utms)
        if (sessionStorage.getItem("utmsConcatenated")){
            console.log(utms)
            let utmsConcat = sessionStorage.getItem('utmsConcatenated')
            processUtms(utmsConcat)

        }else{
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