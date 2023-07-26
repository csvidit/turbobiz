import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainContainer from "@/components/MainContainer";
import Footer from "@/components/Footer";
import Nav from "@/components/nav/Nav";
import { User, onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useReducer, useState } from "react";
import { auth } from "@/firebase.config";
import { GetServerSideProps } from "next";
import { usePathname } from "next/navigation";
import Head from "next/head";
import {
  AuthContext,
  AuthDispatchContext,
  UserAction,
  initialUserState,
  userReducer,
} from "@/AuthContext";
import Loading from "@/components/Loading";

interface MainAppProps extends AppProps {
  user: User | undefined;
}

export default function App({ Component, pageProps, router }: MainAppProps) {
  // const [currentUser, setCurrentUser] = useState(user);
  const [currentUser, dispatch] = useReducer(userReducer, initialUserState);
  const [isLoading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "LOGIN", payload: user });
        setLoading(false);
      } else {
        dispatch({ type: "LOGOUT", payload: null });
        setLoading(false);
      }
    });
  });

  if (isLoading) {
    return (
      <MainContainer>
        <Loading />
      </MainContainer>
    );
  }

  return (
    <AuthContext.Provider value={currentUser}>
      <AuthDispatchContext.Provider value={dispatch}>
        <MainContainer>
          <Head>
            {/* <title>
          {pathname == "/" ? "" : pathname?.substring(1) + " -"} Turbobiz
        </title> */}
            <title>Turbobiz</title>
            <meta name="author" content="Vidit Khandelwal" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:url" content="https://turbobiz.xyz" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Turbobiz" />
            <meta
              name="twitter:card"
              content="Turbobiz uses the power of cutting-edge AI
        intelligence to accelerate your entrepreneurial spririt."
            />
            <meta property="twitter:domain" content="turbobiz.xyz" />
            <meta property="twitter:url" content="https://turbobiz.xyz" />
            <meta name="twitter:title" content="Turbobiz" />
            <meta
              name="twitter:description"
              content="Create a business idea. Fast."
            />
            <meta name="twitter:image" content="../../public/og-facebook.png" />

            <meta property="og:image" content="../../public/og-facebook.png" />
          </Head>
          {/* <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} /> */}
          <Nav />
          <Component
            {...pageProps}
            key={router.asPath}
            // currentUser={currentUser}
            // setCurrentUser={setCurrentUser}
          />
          <Footer />
        </MainContainer>
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
}
