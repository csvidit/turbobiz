import Head from "next/head";
import MainContent from "../components/MainContent";
import { User } from "firebase/auth";
import { Dispatch, SetStateAction } from "react";
import Loading from "@/components/Loading";
import About from "@/components/About";

export default function Home(props: {
  isLoading: boolean;
  currentUser: User;
  setCurrentUser: Dispatch<SetStateAction<User | undefined>>;
}) {
  if (props.isLoading) {
    return (
      <>
        <Head>
          <meta
            name="description"
            content="Turbobiz uses the power of cutting-edge AI
        intelligence to accelerate your entrepreneurial spririt."
          />
          <meta
            property="og:description"
            content="Turbobiz uses the power of cutting-edge AI
          intelligence to accelerate your entrepreneurial spririt."
          />
        </Head>
        <Loading />
      </>
    );
  }

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Turbobiz uses the power of cutting-edge AI
        intelligence to accelerate your entrepreneurial spririt."
        />
        <meta
          property="og:description"
          content="Turbobiz uses the power of cutting-edge AI
          intelligence to accelerate your entrepreneurial spririt."
        />
      </Head>
      <MainContent>
        <About />
      </MainContent>
    </>
  );
}
