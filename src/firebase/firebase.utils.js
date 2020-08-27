import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC266uFnAL2ilZi6_uOcPSaSkRyh4jKTCQ",
    authDomain: "shopping-db-83cfa.firebaseapp.com",
    databaseURL: "https://shopping-db-83cfa.firebaseio.com",
    projectId: "shopping-db-83cfa",
    storageBucket: "shopping-db-83cfa.appspot.com",
    messagingSenderId: "640951505680",
    appId: "1:640951505680:web:ffe586c1ecabc6fe1e0b95",
    measurementId: "G-1RGK1P4DZJ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    console.log(userAuth.uid);
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log(snapShot);

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;