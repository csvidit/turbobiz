import React from "react";
import { Figtree } from "@next/font/google";

const figtree = Figtree({ subsets: ['latin'] });

const MainContainer = (props: { children: React.ReactNode}) => {
  return (
    <main
      className={
        `relative h-full w-full min-w-screen min-h-screen flex flex-col items-center space-y-40 text-zinc-300 bg-zinc-900 font-light ${figtree.className}`
      }
    >
      {props.children}
    </main>
  );
};

export default MainContainer;
