import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Darker_Grotesque } from "@next/font/google";
import { motion, spring } from "framer-motion";
import {HiArrowLongRight} from "react-icons/hi2"
import {BsArrowRight} from "react-icons/bs"

const dg = Darker_Grotesque({
  variable: "--darker-grotesque-font",
  weight: "300",
  subsets: ["latin"],
});

const Hero = () => {

    const linkVariants = {
        hover: {
            borderBottomColor: "#94a3b8",
            transition: {
                type: spring,
                delay: 0,
            }
        }
    }

    const linkArrowVariants = {
        hover: {
            visibility: "visible",
            transition: {
                type: spring,
                delay: 0,
            }
        }
    }

  return (
    <div className={"w-screen h-screen flex flex-row " + dg.className}>
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center pl-10">
        <h1 className="text-8xl text-amber-600 dark:text-amber-400">turbobiz</h1>
        <h2 className="text-5xl text-slate-600 dark:text-slate-400">create a business. fast.</h2>
        <motion.div className="w-2/4 mt-5 text-slate-400 pb-2 border-b-2 border-b-transparent" variants={linkVariants} whileHover="hover">
          <Link
            className="flex flex-row justify-between text-3xl items-center"
            href="/create"
            rel="noreferrer noopener"
          >
            <p>Let&apos;s go</p>
            <motion.div className="invisible" variants={linkArrowVariants}><BsArrowRight/></motion.div>
          </Link>
        </motion.div>
      </div>
      <div className="w-1/2 h-screen flex flex-col justify-center relative invisible lg:visible">
        <Image src="/unsplash-3.jpg" fill={true} alt="Yellow abstract" />
      </div>
    </div>
  );
};

export default Hero;
