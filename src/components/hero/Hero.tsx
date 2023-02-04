import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Darker_Grotesque } from "@next/font/google";
import { motion, spring } from "framer-motion";
import {HiArrowLongRight} from "react-icons/hi2"
import {BsArrowRight} from "react-icons/bs"
import Title from "../Title";
import Subtitle from "../Subtitle";

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
    <div className={"w-screen h-screen flex flex-row"}>
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center pl-10">
        <Title>turbobiz</Title>
        <Subtitle>create a business. fast.</Subtitle>
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
