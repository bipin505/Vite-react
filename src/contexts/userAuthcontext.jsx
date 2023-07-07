import React, { createContext, useState, useContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    return await signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [user]);

  const value = {
    signIn,
    signUp,
    user,
    logOut,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  return useContext(UserContext);
};
