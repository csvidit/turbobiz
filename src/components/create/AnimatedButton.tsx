import { Darker_Grotesque } from "@next/font/google";
import { motion } from "framer-motion";
import React from "react";
import { BsArrowCounterclockwise, BsArrowUpRight } from "react-icons/bs";
import { UrlObject } from "url";

interface AnimatedButtonProps {
  variant: string;
  href: string;
  children: React.ReactNode;
}

const AnimatedButton = (props: AnimatedButtonProps) => {
  return (
    <motion.a
      href={props.href}
      className={
        props.variant === "outline"
          ? `flex flex-row space-x-2 w-fit mt-8 pl-4 pr-4 pt-2 pb-2 text-sm font-medium rounded-md bg-transparent border-2 dark:border-zinc-200 border-zinc-900 items-center dark:text-zinc-200 text-zinc-900`
          : `flex flex-row space-x-2 w-fit mt-8 pl-4 pr-4 pt-2 pb-2 text-sm font-medium rounded-md dark:bg-zinc-200 bg-zinc-900 items-center`
      }
      whileHover={{
        paddingLeft: "50px",
        paddingRight: "50px",
        transition: { delay: 0 },
      }}
    >
      {props.children}
    </motion.a>
  );
};

export default AnimatedButton;
