import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAmJo8VIZvb-wOATFnXxUP1iBjRR_8oYSE",
  authDomain: "house-marketplace-app-14189.firebaseapp.com",
  projectId: "house-marketplace-app-14189",
  storageBucket: "house-marketplace-app-14189.appspot.com",
  messagingSenderId: "258307616761",
  appId: "1:258307616761:web:c402ca4a5bb4cfee2d9728"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore()