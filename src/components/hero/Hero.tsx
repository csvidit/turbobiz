import React, { Dispatch, SetStateAction, useContext } from "react";
import Title from "../Title";
import Subtitle from "../Subtitle";
import PrimaryLink from "../PrimaryLink";
import SignIn from "../SignIn";
import { User } from "firebase/auth";
import { PiShootingStarDuotone } from "react-icons/pi";
import { AuthContext } from "@/AuthContext";

const Hero = (props: {}) => {
  const user = useContext(AuthContext);

  return (
    <div className="w-full h-full min-h-screen flex flex-col space-y-4">
      <div className="flex flex-row space-x-2 relative items-center text-amber-400">
        <PiShootingStarDuotone size={32} />
        <div className="flex flex-row space-x-2 items-baseline">
          <Title>turbobiz</Title>
          <div className="px-1 py-0.5 rounded text-xs bg-zinc-950 border border-zinc-800 text-amber-400 text-opacity-60">
            version 2 (beta)
          </div>
        </div>
      </div>
      <Subtitle>leverage the power of ai and create a business. fast.</Subtitle>
      {user == undefined || null ? (
        <SignIn variant="fill">sign in to continue</SignIn>
      ) : (
        <PrimaryLink variant="fill" href="/create" external={false}>
          Start Creating
        </PrimaryLink>
      )}
    </div>
  );
};

export default Hero;
