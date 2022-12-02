import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {

  apiKey: "AIzaSyAIsaoUh9hBiIBxcY-ulbp615VwfEafbUk",
  authDomain: "real-state-derek.firebaseapp.com",
  projectId: "real-state-derek",
  storageBucket: "real-state-derek.appspot.com",
  messagingSenderId: "1019938896230",
  appId: "1:1019938896230:web:df26054c4bd7dc1211b0a7",

};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };