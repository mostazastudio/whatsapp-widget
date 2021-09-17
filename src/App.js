import React from 'react';
import InitialButton from './components/InitialButton';
import WhatsappForm from './components/WhatsappForm';
import "./App.css"

const App = () => {
    return (
        <div className="container">
            <WhatsappForm></WhatsappForm>
            <InitialButton></InitialButton>
        </div>
    );
};

export default App;