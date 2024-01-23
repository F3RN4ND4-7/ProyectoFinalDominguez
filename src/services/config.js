import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "ferztore-82ffb.firebaseapp.com",
  projectId: "ferztore-82ffb",
  storageBucket: "ferztore-82ffb.appspot.com",
  messagingSenderId: "796045945019",
  appId: "1:796045945019:web:22035111699a628b60a19e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
