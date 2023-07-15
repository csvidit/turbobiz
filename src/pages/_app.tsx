import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import MainContainer from "@/components/MainContainer";
import Footer from "@/components/Footer";
import Nav from "@/components/nav/Nav";
import {
  User,
  browserSessionPersistence,
  getAuth,
  onAuthStateChanged,
  setPersistence,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { GetServerSideProps, GetStaticProps } from "next";
import { auth } from "@/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import * as firebaseAdmin from "firebase-admin";

interface MainAppProps extends AppProps {
  user: User | undefined;
}

export default function App({
  Component,
  pageProps,
  user,
  router,
}: MainAppProps) {
  const [currentUser, setCurrentUser] = useState(user);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user)
      {
        setCurrentUser(user);
        setLoading(false);
      }
      else
      {
        setCurrentUser(undefined);
        setLoading(false);
      }
    });
  });

  if(isLoading)
  {
    <MainContainer>
        <Component
          {...pageProps}
          key={router.asPath}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          isLoading={isLoading}
        />
      </MainContainer>
  }

  return (
    // <AuthProvider>
      <MainContainer>
        <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Component
          {...pageProps}
          key={router.asPath}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
        <Footer />
      </MainContainer>
    // </AuthProvider>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   console.log("INSIDE GETSERVERSIDEPROPS");
//   setPersistence(auth, browserSessionPersistence).then(
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         return { props: { user: user } };
//       } else {
//         return { props: { user: undefined } };
//       }
//     })
//   );
//   return { props: { user: undefined } };
// };

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // const user = auth.currentUser;
//   // return {props: {user: user}}
//   const { req } = context;
//   const { authorization } = req.headers;

//   const user = await firebaseAdmin.auth().getUser(authorization!);
//   return { props: { user: user } };

//   // getAuth()
//   // .verifyIdToken(authorization)
//   // .then((decodedToken: { uid: any; }) => {
//   //   const uid = decodedToken.uid;
//   //   const user =
//   // })
//   // .catch((error: any) => {
//   //   console.log(error);
//   // });
// };
