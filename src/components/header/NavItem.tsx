import Link from "next/link";
import React from "react";
import { UrlObject } from "url";

const NavItem = (props: { href: string | UrlObject; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) =>
{
    return(<Link className="text-zinc-900 dark:text-zinc-200" href={props.href}>{props.children}</Link>)
}

export default NavItem;