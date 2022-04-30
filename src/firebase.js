// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  // GoogleAuthProvider,
  getAuth,
  // signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import { getFirestore, collection, addDoc, setDoc, doc, deleteDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY || 'mock-key',
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MSI,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

//Functions for log in in and register with email and password
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
    throw(err)
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
    throw(err)
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};


const addPost = async (inputValue) => {
    try {
        await addDoc(collection(db, "posts"), inputValue);
      } catch (err) {
        console.error(err);
        alert(err.message);
        throw(err)
      }
}

const editPost = async (id, updValue) => {
  try {
      const docRef = doc(db, "posts", id)
      await setDoc(docRef, updValue);
    } catch (err) {
      console.error(err);
      alert(err.message);
      throw(err)
    }
}

const deletePost = async (id) => {
  try {
    const docRef = doc(db, "posts", id)
    await deleteDoc(docRef);
  } catch (err) {
    console.error(err);
    alert(err.message);
    throw(err)
  }
}



export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    addPost,
    editPost,
    deletePost
  };