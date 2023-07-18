import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainContainer from "@/components/MainContainer";
import Footer from "@/components/Footer";
import Nav from "@/components/nav/Nav";
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "@/firebase.config";
import { GetServerSideProps } from "next";
import { usePathname } from "next/navigation";
import Head from "next/head";

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
  const pathname = usePathname();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setLoading(false);
      } else {
        setCurrentUser(undefined);
        setLoading(false);
      }
    });
  });

  if (isLoading) {
    <MainContainer>
      <Component
        {...pageProps}
        key={router.asPath}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        isLoading={isLoading}
      />
    </MainContainer>;
  }

  return (
    // <AuthProvider>
    <MainContainer>
      <Head>
        <title>
          {pathname == "/" ? "" : pathname?.substring(1) + " -"} Turbobiz
        </title>
        <meta name="author" content="Vidit Khandelwal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <meta name="twitter:image" content="og-facebook.png" />

        <meta property="og:image" content="og-facebook.png" />
      </Head>
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

// export const getServerSideProps: GetServerSideProps = aysnc (context) => {

// }

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
