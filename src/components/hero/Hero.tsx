import React from "react";
import Image from "next/image";
import { easeInOut, motion, spring } from "framer-motion";
import Title from "../Title";
import Subtitle from "../Subtitle";
import MainLink from "../MainLink";
import TurbobizLogo from "../TurbobizLogo";

const Hero = () => {
  const linkVariants = {
    hover: {
      borderBottomColor: "#94a3b8",
      transition: {
        type: spring,
        delay: 0,
      },
    },
  };

  const linkArrowVariants = {
    hover: {
      visibility: "visible",
      transition: {
        type: spring,
        delay: 0,
      },
    },
  };

  return (
    <div className={"w-screen h-screen flex flex-col-reverse lg:flex-row"}>
      <motion.div className="w-full lg:w-1/2 h-full flex flex-col justify-center pl-10 opacity-1">
      <TurbobizLogo size="lg"></TurbobizLogo>
        <motion.div className="flex flex-col space-y-1" animate={{opacity: [0,1], transition: {delay: 1, ease: "easeInOut", duration: 0.5}}}>
          <Title size="lg">turbobiz</Title>
          <Subtitle size="lg">create a business. fast.</Subtitle>
          <MainLink href="/create">let&apos;s go</MainLink>
        </motion.div>
      </motion.div>
      <div className="w-full lg:w-1/2 h-screen flex flex-col justify-center relative">
        <Image
          src="/unsplash-3.jpg"
          fill={true}
          alt="Yellow abstract"
          className="p-10 lg:p-0"
        />
      </div>
    </div>
  );
};

export default Hero;
