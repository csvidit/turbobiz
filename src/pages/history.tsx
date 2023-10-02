import Head from "next/head";
import MainContent from "../components/MainContent";
import Title from "@/components/Title";
import { useContext, useEffect, useState } from "react";
import { PiInfo } from "react-icons/pi";
import { AuthContext } from "@/AuthContext";
import HistoryItem from "@/components/history/HistoryItem";
import HistoryHero from "@/components/history/HistoryHero";
import HistoryLoading from "@/components/history/HistoryLoading";
import axios from "axios";

export interface History {
  version: number;
  category: string;
  country: string;
  isRemote: boolean;
  businessSize: number;
  businessName: string;
  businessDescription: string;
  businessDomains: string[];
  createdTime: number;
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState([]);
  const user = useContext(AuthContext);

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      await axios
        .post("/api/history", { params: {uid: user?.uid} })
        .then((response) => {
          setHistory(response.data.history);
          setLoading(false);
        })
        .catch((error) => console.log("CLIENT SIDE ERROR", error));
    };
    if (user != null && user != undefined) {
      fetchHistory();
    }
  }, [user]);

  return (
    <>
      <Head>
        <meta name="description" content="Create a business idea. Fast." />
      </Head>
      <MainContent>
        {user == null || undefined ? (
          <HistoryHero />
        ) : (
          <div className="flex flex-col w-full h-full space-y-4">
            <Title>user search history</Title>
            <div className="bg-zinc-950 border border-zinc-800 text-zinc-600 px-2 py-1 rounded-md text-sm w-fit space-x-1 flex-wrap">
              <PiInfo size={16} className="w-fit inline mr-1 object-center" />
              This is a new feature, user searches before the release of this
              feature are not available.
            </div>
            {loading ? (
              <HistoryLoading />
            ) : (
              history.map((x, index) => <HistoryItem data={x} key={index} />)
            )}
          </div>
        )}
      </MainContent>
    </>
  );
}
