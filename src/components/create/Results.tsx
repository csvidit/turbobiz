import Link from "next/link";
import { BsArrowUpRight, BsArrowCounterclockwise } from "react-icons/bs";
import Subtitle from "../Subtitle";
import { Darker_Grotesque } from "@next/font/google";
import { motion } from "framer-motion";

const dg = Darker_Grotesque({
    variable: "--darker-grotesque-font",
    subsets: ["latin"],
    weight: "600",
  });

const Results = () => {
  return (
    <div
      id="results"
      className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center text-center"
    >
      <div className="mt-8 text-center flex flex-col space-y-1 items-center">
        <Subtitle size="lg">your business should be called</Subtitle>
        <p className="text-zinc-200 text-6xl">SecureAccess</p>
      </div>
      <div className="flex flex-row space-x-8 items-center">
        <motion.a
          href="https://domains.google.com"
          className={
            "flex flex-row space-x-2 mt-8 pl-4 pr-4 pt-2 pb-2 text-xl rounded-md dark:bg-zinc-200 bg-zinc-900 items-center " +
            dg.className
          }
          whileHover={{paddingLeft: "50px", paddingRight: "50px", transition: {delay: 0,}}}
        >
          <p>buy this domain</p>
          <BsArrowUpRight className="text-xl" />
        </motion.a>
        <motion.a
          href="/"
          className={
            "flex flex-row space-x-2 mt-8 pl-4 pr-4 pt-2 pb-2 text-xl rounded-md bg-transparent border-2 dark:border-zinc-200 border-zinc-900 items-center dark:text-zinc-200 text-zinc-900 " +
            dg.className
          }
          whileHover={{paddingLeft: "50px", paddingRight: "50px", transition: {delay: 0,}}}
        >
          <p>another name</p>
          <BsArrowCounterclockwise className="text-xl" />
        </motion.a>
      </div>
    </div>
  );
};

export default Results;
