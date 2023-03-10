import { Darker_Grotesque } from "@next/font/google";
import { motion } from "framer-motion";
import React from "react";
import { BsArrowCounterclockwise, BsArrowUpRight } from "react-icons/bs";
import { UrlObject } from "url";

const dg = Darker_Grotesque({
  variable: "--darker-grotesque-font",
  subsets: ["latin"],
  weight: "600",
});

const AnimatedButton = (props: {
  type: string;
  href: string;
  children: any;
}) => {
  if (props.type === "outline") {
    return (
      <motion.a
        href={props.href}
        className={
          "flex flex-row space-x-2 mt-8 pl-4 pr-4 pt-2 pb-2 text-xl rounded-md bg-transparent border-2 dark:border-zinc-200 border-zinc-900 items-center dark:text-zinc-200 text-zinc-900 " +
          dg.className
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
  } else {
    return (
      <motion.a
        href={props.href}
        className={
          "flex flex-row space-x-2 mt-8 pl-4 pr-4 pt-2 pb-2 text-xl rounded-md dark:bg-zinc-200 bg-zinc-900 items-center " +
          dg.className
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
  }
};

export default AnimatedButton;
