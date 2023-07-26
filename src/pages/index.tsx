import Head from "next/head";
import MainContent from "../components/MainContent";
import Hero from "@/components/hero/Hero";
import Create from "@/components/create/Create";
import { User } from "firebase/auth";
import { Dispatch, SetStateAction, useContext } from "react";
import Loading from "@/components/Loading";
import { AuthContext } from "@/AuthContext";

export default function Home(props: {
  isLoading: boolean;
}) {
  const user = useContext(AuthContext);

  if (props.isLoading) {
    return (
      <>
        <Head>
          <meta name="description" content="Create a business idea. Fast." />
          <meta
            property="og:description"
            content="Create a business idea. Fast."
          />
        </Head>
        <Loading />
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
      <MainContent>
        {user == null || undefined ? <Hero /> : <Create />}
      </MainContent>
    </>
  );
}
