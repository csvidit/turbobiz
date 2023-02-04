import React from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";

const Header = () =>
{
    return(<nav className="flex flex-row space-x-5 justify-center items-baseline w-full p-4 border-b-2 border-b-zinc-500">
        <Logo/>
        <NavItem href="/about">About</NavItem>
    </nav>)
}

export default Header;