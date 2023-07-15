import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// import * as firebaseAdmin from "firebase-admin";
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,

    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// export const admin = firebaseAdmin.initializeApp({
//     credential: firebaseAdmin.credential.cert({
//       projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//       clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//       privateKey: process.env.FIREBASE_PRIVATE_KEY,
//     }),
//   });
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
export const auth = getAuth(app)
export const firestore = getFirestore(app);
export const provider = new GoogleAuthProvider();