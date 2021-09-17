import React from "react";
import { ReactDOM } from "react";
import App from "./App"
import widgetProvider from "./context/widgetContext";



let init = null;

export default{
    config: (config) =>{
        init = config;
    },
    widgets:{
        myWidget:{
            new: () =>{
                return{
                    render: () => {
                        ReactDOM.render(
                            <widgetProvider>
                                <App config={config}></App>
                            </widgetProvider>,
                            document.getElementById("root")
                            );
                    },
                    unmount(){
                        ReactDOM.unmountComponentAtNode(document.querySelector(init.selector));
                    },
                }
            }
        }
    }
}
