import React, { createContext, useEffect, useState } from 'react';

const LoginContext = createContext();


const LoginProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("whatsappWidgetToken"));
    
    useEffect(()=>{
        const fetchUser = async () =>{
            const requestOptions = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization : "Bearer " + token,
                },
            };

            const response = await fetch("http://127.0.0.1:8000/marcas/me",requestOptions);

            if ( !response.ok) {
                setToken(null);
            }

            localStorage.setItem("whatsappWidgetToken", token)
        }

        fetchUser();
    }, [token]);

    data = {token, setToken}

    return (
        <LoginContext.Provider value={data}>
            {children}
        </LoginContext.Provider>
    );
};


export {LoginContext}
export default LoginProvider;