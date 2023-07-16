import Head from "next/head";
import MainContent from "../components/MainContent";
import Hero from "@/components/hero/Hero";
import { GetServerSideProps } from "next";
import Create from "@/components/create/Create";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase.config";
import {
  GoogleAuthProvider,
  User,
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { Dispatch, SetStateAction } from "react";
import Loading from "@/components/Loading";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";

export default function Home(props: {
  isLoading: boolean;
  currentUser: User;
  setCurrentUser: Dispatch<SetStateAction<User | undefined>>;
}) {
  if (props.isLoading) {
    return (
      <>
        <Head>
          <Head>
            <title>About - Turbobiz</title>
            <meta name="description" content="Create a business idea. Fast." />
            <meta name="author" content="Vidit Khandelwal" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        </Head>
        <Loading />
      </>
    );
  } else {
    if (props.currentUser == undefined) {
      const signIn = async () => {
        await signInWithRedirect(auth, new GoogleAuthProvider());
        const result = await getRedirectResult(auth);
        if (result) {
          auth.updateCurrentUser(result.user);
          props.setCurrentUser(result.user);
        }
      };
      signIn();
    } else {
      return (
        <>
          <Head>
            <title>About - Turbobiz</title>
            <meta name="description" content="Create a business idea. Fast." />
            <meta name="author" content="Vidit Khandelwal" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <MainContent>
            <div className="mt-40 w-full h-full min-h-screen">
              {" "}
              <Title>History</Title>
              <Subtitle>{props.currentUser.displayName}</Subtitle>
            </div>
          </MainContent>
        </>
      );
    }
  }
}
