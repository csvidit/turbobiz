import React from "react";
import { Darker_Grotesque } from "@next/font/google";

// const dg = Darker_Grotesque({
//     variable: "--darker-grotesque-font",
//     subsets: ["latin"],
//     weight: ['100','400','900']
// });

const MainContainer = (props: {children: any}) =>
{
    return (<main className={"relative h-full w-full min-w-screen min-h-screen flex flex-col items-center space-y-4 text-zinc-300 bg-zinc-900"}>{props.children}</main>);
}

export default MainContainer;