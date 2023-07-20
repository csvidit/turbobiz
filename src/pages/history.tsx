import Head from "next/head";
import MainContent from "../components/MainContent";
import Loading from "@/components/Loading";
import Title from "@/components/Title";
import { useState } from "react";
import Subtitle from "@/components/Subtitle";
import { PiInfo } from "react-icons/pi";

export default function Home(props: {}) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Head>
        <meta name="description" content="Create a business idea. Fast." />
      </Head>
      <MainContent>
        <div className="flex flex-col w-full h-full space-y-4">
          <Title>Coming Soon: User Search History</Title>
          <div className="bg-zinc-950 border border-zinc-800 text-zinc-600 px-2 py-1 rounded-md text-sm w-fit flex flex-row space-x-1 items-center flex-wrap">
            <div>
              <PiInfo size={16} />
            </div>
            <div>
              This is a new feature, user searches before the release of this
              feature are not available.
            </div>
          </div>
        </div>
      </MainContent>
    </>
  );
}
