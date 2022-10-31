import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import {
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged,} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'; // used to create a database in firestore




  const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  
  // function to sign up a new user and create a user's file and email in a "users" firebaase database
  function signUp(email, password) {
   createUserWithEmailAndPassword(auth, email, password)
   setDoc(doc(db, 'users', email), { 
      savedShows: []
   } )
  }

  //function to log in
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // function to log out
  function logOut() {
    return signOut(auth);
  }

  //on and off state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });



  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}
export function UserAuth() {
  return useContext(AuthContext);
}