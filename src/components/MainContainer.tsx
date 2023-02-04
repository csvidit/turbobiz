import React from "react";

const MainContainer = (props: {children: any}) =>
{
    return (<main className="w-screen h-screen flex flex-col bg-zinc-200 dark:bg-zinc-900">{props.children}</main>);
}

export default MainContainer;