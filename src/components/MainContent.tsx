import React from "react";

const MainContent = (props: {children: any}) =>
{
    return (<div className="min-h-screen h-full flex flex-col w-11/12 lg:w-10/12 self-center">{props.children}</div>);
}

export default MainContent;