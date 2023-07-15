import React from "react";

interface SubtitleProps{
    children: React.ReactNode
}

const Subtitle = (props: SubtitleProps) =>
{
    return(<h2 className="text-xl lg:text-2xl text-zinc-300 font-light">{props.children}</h2>)
}

export default Subtitle;