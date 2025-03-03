import React, { createContext, useState } from 'react';
import app from "../firebase/Firebase.config"
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const AuthContext =createContext();
const auth=getAuth();
const googleProvider= new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user ,setUser]=useState(null);
  const [loading, setLoading]= useState(true);
    const authInfo={
       user,
       loading
    }
  return (
    <AuthContext.Provider value={authInfo}>
         {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider