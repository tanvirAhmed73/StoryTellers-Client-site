import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../../firebase.init";
import usePublic from "../Hooks/usePublic";

export const AuthContext = createContext(null);



const AuthProvider = ({children}) => {
    const axiosPublic = usePublic()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    // observe auth state change
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            // const email = currentUser?.email
            // if(currentUser){
            //     axiosPublic.post('/jwt', {email} , {withCredentials: true})
            //     .then(res =>{
            //         console.log(res.data)
            //     })
            // } 
            setLoading(false);
        });
        return ()=>{
            unSubscribe();
        }
    },[])



    const authInfo = {user, createUser, signInUser, logOut, loading}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}