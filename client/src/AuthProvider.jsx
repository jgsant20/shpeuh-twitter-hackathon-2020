import React, { createContext, useState, useEffect } from 'react'
import * as firebase from 'firebase';

export const AuthContext = createContext({ user: null });
function AuthProvider(props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(auth => {
            setUser(auth);
        });
    }, [])


    return (
        <AuthContext.Provider value={user}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;




