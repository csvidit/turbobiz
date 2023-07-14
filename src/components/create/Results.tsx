import Link from "next/link";
import { BsArrowUpRight, BsArrowCounterclockwise } from "react-icons/bs";
import Subtitle from "../Subtitle";
import { Darker_Grotesque } from "@next/font/google";
import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";

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
        <Subtitle>your business should be called</Subtitle>
        <p className="text-zinc-200 text-6xl">SecureAccess</p>
      </div>
      <div className="flex flex-row space-x-8 items-center">
        <AnimatedButton href="https://domains.google.com" variant="filled">
          <p>buy this domain</p>
          <BsArrowUpRight className="text-xl" />
        </AnimatedButton>
        <AnimatedButton href="/" variant="outline">
          <p>another name</p>
          <BsArrowCounterclockwise className="text-xl" />
        </AnimatedButton>
      </div>
    </div>
  );
};

export default Results;
