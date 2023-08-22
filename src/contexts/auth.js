import { createContext, useEffect, useState } from "react";
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        function loadStorage() {
            const storageUser = localStorage.getItem('react-helpdesk');
            if (storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }

            setLoading(false);
        }

        loadStorage();

    }, []);

    const signUp = async(email, password, name) => {
        setLoadingAuth(true);

        await firebase.auth().createUserWithEmailAndPassword(email, password).then(async (value) => {
            let uid = value.user.uid;
            await firebase.firestore().collection('users').doc(uid).set({
                name,
                avatarUrl: null
            }).then(() => {
                let data = {
                    uid,
                    name,
                    email: value.user.email,
                    avatarUrl: null
                };

                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
            }).catch((error) => {
                console.log(error);
                setLoadingAuth(false);
            });
        });
    }

    const storageUser = async(data) => {
        await localStorage.setItem('react-helpdesk', JSON.stringify(data));
    }

    const signOut = async() => {
        await firebase.auth().signOut();
        localStorage.removeItem('react-helpdesk');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, signUp, signOut, loadingAuth }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;