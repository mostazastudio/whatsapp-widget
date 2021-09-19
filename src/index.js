import React from "react";
import ReactDOM  from "react-dom";
import App from "./App"
import widgetProvider from "./context/widgetContext";


export const init = () =>{

  ReactDOM.render(
      <React.StrictMode>
        <widgetProvider>
        <App />
        </widgetProvider>
      </React.StrictMode>,
      document.getElementById('root')
    );
}