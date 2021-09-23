import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import WidgetProvider from "./context/widgetContext";


ReactDOM.render(
  <React.StrictMode>
    <WidgetProvider>

      <App />
    </WidgetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);