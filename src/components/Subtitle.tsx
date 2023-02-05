import React from "react";

const Subtitle = (props: {children: any, size: string}) =>
{
    let classes = "text-red-600 dark:text-red-400"
    if(props.size === "" || props.size === "lg")
    {
        classes+=" text-5xl";
    }
    else if(props.size === "md")
    {
       classes+=" text-3xl";
    }
    else if(props.size === "sm")
    {
        classes+=" text-xl";
    }
    else
    {
        classes+=" text-5xl";
    }
    return(<h2 className={classes}>{props.children}</h2>)
}

export default Subtitle;