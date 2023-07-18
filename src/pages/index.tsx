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
          <meta name="description" content="Create a business idea. Fast." />
          <meta
          property="og:description"
          content="Create a business idea. Fast."
        />
        </Head>
        <Loading/>
      </>
    );
  }
  
  return (
    <>
      <Head>
        <meta name="description" content="Create a business idea. Fast." />
        <meta
          property="og:description"
          content="Create a business idea. Fast."
        />
      </Head>
      <MainContent>{props.currentUser == null ? <Hero currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} /> : <Create currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} />}</MainContent>
    </>
  );
}