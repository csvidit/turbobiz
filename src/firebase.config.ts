import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, initializeFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,

  authDomain: process.env.FIREBASE_AUTH_DOMAIN,

  projectId: process.env.FIREBASE_PROJECT_ID,

  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,

  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,

  appId: process.env.FIREBASE_APP_ID,

  measurementId: process.env.FIREBASE_MEASUREMENT_ID,

  // auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",

  // clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};

// const firebaseAdminConfig = {
//   credential: firebaseAdmin.credential.cert({
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//     privateKey: process.env.FIREBASE_PRIVATE_KEY,
//   }),
// };

// export const admin = !(firebaseAdmin.apps.length) ? firebaseAdmin.initializeApp(firebaseAdminConfig) : firebaseAdmin.app;
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const firestore = getFirestore(app);
