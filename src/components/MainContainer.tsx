import React from "react";
import { Darker_Grotesque } from "@next/font/google";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase.config";

const MainContainer = (props: { children: React.ReactNode}) => {
  return (
    <main
      className={
        "relative h-full w-full min-w-screen min-h-screen flex flex-col items-center space-y-4 text-zinc-300 bg-zinc-900 font-light"
      }
    >
      {props.children}
    </main>
  );
};

export default MainContainer;
