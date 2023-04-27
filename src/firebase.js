import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getStorage } from "@firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDC5cH_-vIeZyZmHQAquKRB5tFkFpdpW34",
    authDomain: "viar-2545e.firebaseapp.com",
    projectId: "viar-2545e",
    storageBucket: "viar-2545e.appspot.com",
    messagingSenderId: "435875257818",
    appId: "1:435875257818:web:13e0461f08cf434c1534e3",
    measurementId: "G-32EQ7XJRJR"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);