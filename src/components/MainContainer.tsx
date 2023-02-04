import React from "react";
import { Darker_Grotesque } from "@next/font/google";

const dg = Darker_Grotesque({
    variable: "--darker-grotesque-font",
    weight: "300",
    subsets: ["latin"],
  });

const MainContainer = (props: {children: any}) =>
{
    return (<main className={"w-screen h-screen flex flex-col bg-zinc-200 dark:bg-zinc-900 "+dg.className}>{props.children}</main>);
}

export default MainContainer;