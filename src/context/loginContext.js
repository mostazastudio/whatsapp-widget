import React, { createContext, useEffect, useState } from 'react';

const LoginContext = createContext();


const LoginProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("whatsappWidgetToken"));
    const [errorMessage, setErrorMessage] = useState("")
    
    const fetchUser = async () =>{
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization : "Bearer " + token,
            },
        };

        const response = await fetch("http://127.0.0.1:8000/marcas/me",requestOptions);

        if (!response.ok) {
            setToken(null);
            localStorage.setItem("whatsappWidgetToken", token)
            return (false)
        }else{
            return(true)
        }

        
        
    }

    const fetchToken = async () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({usename:"localhost",password:"Olvidala249ever24**85"})
        };

        const response = await fetch("http://127.0.0.1:8000/marcas/token", requestOptions);
        const data = await response.json();

        if(!response.ok){
            setErrorMessage(data.detail)
        }else{
            setToken(data.access_token)
        }
    }

    useEffect(()=>{

        let token_valid = fetchUser();
        if(!token_valid){
            fetchToken()
        }
    }, [token]);

    const data = {token, setToken}

    return (
        <LoginContext.Provider value={data}>
            {children}
        </LoginContext.Provider>
    );
};


export {LoginContext}
export default LoginProvider;