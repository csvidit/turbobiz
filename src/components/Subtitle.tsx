import React from "react";

const Title = (props: {children: any}) =>
{
    return(<h2 className="text-5xl text-slate-600 dark:text-slate-400">{props.children}</h2>)
}

export default Title;