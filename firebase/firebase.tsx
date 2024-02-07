// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyCViDi8bQ9qCW-EqQLehuTZkZGo1J10b1w",
  authDomain: "crud-app-5457b.firebaseapp.com",
  projectId: "crud-app-5457b",
  storageBucket: "crud-app-5457b.appspot.com",
  messagingSenderId: "567464796458",
  appId: "1:567464796458:web:5ecab96f4527e958e1be53",
  measurementId: "G-1K5KWDJZ5B"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export const db = getFirestore(app);
