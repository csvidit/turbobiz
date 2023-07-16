import Head from "next/head";
import MainContent from "../components/MainContent";
import Hero from "@/components/hero/Hero";
import Create from "@/components/create/Create";
import { User } from "firebase/auth";
import { Dispatch, SetStateAction } from "react";
import Loading from "@/components/Loading";

export default function Home(props: {isLoading: boolean; currentUser: User, setCurrentUser: Dispatch<SetStateAction<User | undefined>>}) {
  
  if(props.isLoading)
  {
    return (
      <>
        <Head>
          <title>Turbobiz</title>
          <meta name="description" content="Create a business idea. Fast." />
          <meta name="author" content="Vidit Khandelwal" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Loading/>
      </>
    );
  }
  
  return (
    <>
      <Head>
        <title>Turbobiz</title>
        <meta name="description" content="Create a business idea. Fast." />
        <meta name="author" content="Vidit Khandelwal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContent>{props.currentUser == null ? <Hero currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} /> : <Create currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} />}</MainContent>
    </>
  );
}