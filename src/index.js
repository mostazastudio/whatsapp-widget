import React from "react";
import ReactDOM  from "react-dom";
import App from "./App"
import widgetProvider from "./context/widgetContext";


export const init = (config) => {
    ReactDOM.render(
        <widgetProvider>
            <App config={config}></App>
        </widgetProvider>,
        document.getElementById("root")
        );
}