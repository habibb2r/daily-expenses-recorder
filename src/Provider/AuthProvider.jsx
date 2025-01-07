/* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword, getAuth,  onAuthStateChanged,  signInWithEmailAndPassword,  signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../ConfigFiles/firebase.config";



export const AuthContext = createContext(null);

const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

    });
    return () => {
      return unsubscribe();
    };
  }, [setUser]);


  const authInfo = {
    user,
    loading,
    createUser,
    signin,
    logOut,
  };


  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;