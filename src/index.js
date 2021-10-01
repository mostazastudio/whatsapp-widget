import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import WidgetProvider from "./context/widgetContext";
import LoginProvider from "./context/loginContext";


ReactDOM.render(
  <React.StrictMode>
    <LoginProvider>
    <WidgetProvider>
      <App />
    </WidgetProvider>
    </LoginProvider>
  </React.StrictMode>,
  document.getElementById('root')
);