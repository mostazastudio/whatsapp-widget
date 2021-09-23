import React, { useEffect } from 'react';
import InitialButton from './components/InitialButton';
import WhatsappForm from './components/WhatsappForm';
import "./App.css"

const App = () => {

    useEffect(()=>{
        var queryString = window.location.search;
        var urlParams   = new URLSearchParams(queryString);
        var source = urlParams.get("utm_source")
        var medium = urlParams.get("utm_medium")
        var campaign = urlParams.get("utm_campaign")
        var content = urlParams.get("utm_content")
        console.log(source)
        console.log(medium)
        console.log(campaign)
        console.log(content)
    },[])

    return (
        <div className="container">
            <WhatsappForm></WhatsappForm>
            <InitialButton></InitialButton>
        </div>
    );
};

export default App;