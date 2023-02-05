import React from "react";

const Title = (props: {children: any, size: string}) =>
{

    let classes = "text-amber-600 dark:text-amber-400";
    if(props.size === "" || props.size === "lg")
    {
        classes+=" text-8xl";
    }
    else if(props.size === "md")
    {
       classes+=" text-6xl";
    }
    else if(props.size === "sm")
    {
        classes+=" text-4xl";
    }
    else
    {
        classes+=" text-8xl";
    }
    return(<h1 className={classes}>{props.children}</h1>)
}

export default Title;