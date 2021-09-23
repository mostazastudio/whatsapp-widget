import React, { useEffect } from 'react';
import InitialButton from './components/InitialButton';
import WhatsappForm from './components/WhatsappForm';
import "./App.css"

const App = () => {

    useEffect(()=>{
        var queryString = window.location.search;
        var urlParams   = new URLSearchParams(queryString);
        var source = urlParams.get("utm_source")
        console.log(source)
    },[])

    return (
        <div className="container">
            <WhatsappForm></WhatsappForm>
            <InitialButton></InitialButton>
        </div>
    );
};

export default App;