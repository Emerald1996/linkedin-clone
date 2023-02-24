import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../../firebase";
import { useContext } from "react";

const UserContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})

            // Create user
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

            // Sign In
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
            // Sign Out
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
       const unsub =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log(currentUser)
        });
        return () => {
            unsub()
        }
    }, [])
    return (
        <UserContext.Provider value={{register, logIn , logOut, user}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}