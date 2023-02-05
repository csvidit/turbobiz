import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = (props: any) =>
{
    return (<Link href="/" className="text-2xl font-medium text-amber-500">turbobiz</Link>);
    // if(props.type === "logo")
    // {
    //     return (<Image width={150} height={45} src="./next.svg" alt="logo"/> )
    // }
    // else if(props.type === "wordmark")
    // {
    //     return (<h1 className="text-lg font-medium text-amber-500">turbobiz</h1>)
    // }
    // else
    // {

    // }
}

export default Logo;