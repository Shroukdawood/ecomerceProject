import { useState } from "react";
import { createContext, useContext } from "react";

const AuthContext = createContext({
    token:null,
    login: () => {},
    logout: () => {},
});


export const AuthProvider = ({children}) => {
    const [token , setToken]= useState(null);
    const login = () =>{
     console.log('login')
    } ;
    const logout = () =>{
        console.log('login')
       } ;
    return  <AuthContext.Provider value={{
        login,
        logout,
        token,
        }}>
            {children}
        </AuthContext.Provider>;
    
};

 export const userAuthContext = () => useContext(AuthContext);
