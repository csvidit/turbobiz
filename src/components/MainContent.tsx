import React from "react";

const MainContent = (props: {children: any}) =>
{
    return (<div className="w-screen h-screen flex flex-col bg-zinc-200 dark:bg-zinc-900">{props.children}</div>);
}

export default MainContent;