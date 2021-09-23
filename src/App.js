import React, { useContext, useEffect } from 'react';
import InitialButton from './components/InitialButton';
import WhatsappForm from './components/WhatsappForm';
import "./App.css"
import { WidgetContext } from './context/widgetContext';

const App = () => {

    const { utms, processUtms } = useContext(WidgetContext)

    useEffect(()=>{
        if (sessionStorage.getItem("utmsConcatenated")){
            let utmsConcat = sessionStorage.getItem('utmsConcatenated')
            processUtms(utmsConcat)

        }else{
            let queryString = window.location.search;
            sessionStorage.setItem("utmsConcatenated",queryString)
        }
    },[])

    console.log(utms)

    return (
        <div className="container">
            <WhatsappForm></WhatsappForm>
            <InitialButton></InitialButton>
        </div>
    );
};

export default App;