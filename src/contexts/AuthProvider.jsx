import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/Firebase.config"
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"

export const AuthContext =createContext();
const auth=getAuth();
const googleProvider= new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user ,setUser]=useState(null);
  const [loading, setLoading]= useState(true);
   
    //  Creating an account
    const createUser=(email,password)=>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    }

    //Signing in/ log in with Google
    const signInWithGmail=()=>{
      setLoading(true);
      return signInWithPopup(auth, googleProvider)
    }

    // Logging in/ signing in with email & password
    const login=(email, password)=>{
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    }
    //logging out

    const logout=()=>{
      return signOut(auth);
    }
    //user is available or not
    useEffect(()=>{
      const unsubscribe= onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false);
      });
      return ()=>{
        return unsubscribe()
      }
    })

    const authInfo={
      user,
      loading,
      createUser,
      signInWithGmail,
      login,
      logout
   }
  return (
    <AuthContext.Provider value={authInfo}>
         {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider