import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import firebasesAppInit from "../Components/Firebase/Initialize";

// Initialize the firebase app
firebasesAppInit();

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // Registration function
    const doTheRegistration = (auth, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                setSuccess('User created successfully!');
            })
            .catch((error) => {
                setSuccess('');
                setError(error.message);
            });
    }

    // Login function
    const doTheLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Signin using google
    const signInPopupUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    // Google signout
    const doTheSignOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser([]);
            })
            .finally(() => setIsLoading(false));
    }

    return {
        auth,
        user,
        isLoading,
        error,
        success,
        doTheRegistration,
        doTheLogin,
        signInPopupUsingGoogle,
        doTheSignOut
    }
}

export default useFirebase;