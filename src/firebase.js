import {initializeApp} from "firebase/app"
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD3djbHzdc1OatYqiGL4hOTCuAJ46eqNCA",
    authDomain: "sample-app-7018c.firebaseapp.com",
    projectId: "sample-app-7018c",
    storageBucket: "sample-app-7018c.firebasestorage.app",
    messagingSenderId: "940530168057",
    appId: "1:940530168057:web:e47fc7d7f3322f756ab228"
  };

export const app=initializeApp(firebaseConfig);
const db = getFirestore(app);  // Get Firestore instance
export { db };