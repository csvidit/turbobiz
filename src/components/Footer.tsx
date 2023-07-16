import { ShootingStar } from "@phosphor-icons/react";
import Link from "next/link";
import SecondaryLink from "./SecondaryLink";

const Footer = () => {
  return (<div className="flex flex-col space-y-2 w-11/12 lg:w-10/12 py-4 border-t border-t-zinc-600 font-light text-xs">
    <div className="flex flex-row space-x-2 items-center text-amber-400 ">
        <ShootingStar weight="duotone" size={24} />
        <div className="text-lg">turbobiz</div>
    </div>
    <div>A Vidit Khandelwal Project</div>
    <div>Turbobiz utilizes the power of cutting-edge generative artificial intelligence to accelerate your entrepreneurial spririt.</div>
    <SecondaryLink href="/about" external={false}>about & terms of use</SecondaryLink>
    <SecondaryLink href="https://viditkhandelwal.com" external={true}>viditkhandelwal.com</SecondaryLink>
  </div>);
};

export default Footer;