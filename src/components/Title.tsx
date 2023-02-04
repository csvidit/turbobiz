import React from "react";

const Title = (props: {children: any}) =>
{
    return(<h1 className="text-8xl text-amber-600 dark:text-amber-400">{props.children}</h1>)
}

export default Title;