import React from "react";
import Image from "next/image";
import { motion, spring } from "framer-motion";
import Title from "../Title";
import Subtitle from "../Subtitle";
import MainLink from "../MainLink";
import TurbobizLogo from "../TurbobizLogo";
import AnimatedButton from "../create/AnimatedButton";
import TurbobizLogo2 from "../TurbobizLogo2";
import { ShootingStar } from "@phosphor-icons/react";
import PrimaryLink from "../PrimaryLink";
import PrimaryButton from "../PrimaryButton";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import SignIn from "../SignIn";

const Hero = () => {

  return (
    <div className="w-full h-full min-h-screen justify-center flex flex-col space-y-4">
      <div className="flex flex-row space-x-2 relative items-center text-amber-400">
        <ShootingStar weight="duotone" size={32} />
        <Title>turbobiz</Title>
      </div>
      <Subtitle>leverage the power of ai and create a business. fast.</Subtitle>
      {/* <PrimaryLink variant="fill" href="/create" external={false}>
        Let&apos;s Go
      </PrimaryLink>
      <SignIn variant="fill"></SignIn> */}
    </div>
  );
};

export default Hero;
