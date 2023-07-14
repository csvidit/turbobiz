"use client";

import {
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
  motion,
} from "framer-motion";
import { useState } from "react";
import NavLinks from "./NavLinks";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { ShootingStar } from "@phosphor-icons/react";
import SignIn from "../SignIn";
import NavSignIn from "./NavSignIn";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MotionConfig
      transition={{
        type: "tween",
        duration: 0.35,
        ease: "easeInOut",
        delay: 0,
      }}
    >
      <AnimatePresence mode="popLayout">
        <LayoutGroup>
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              style={{
                // borderRadius: isOpen ? "16px" : "9999px",
                borderBottom: "1px solid #52525b",
              }}
              className="z-50 flex flex-col absolute top-5 lg:top-10 w-11/12 lg:w-10/12 items-start bg-zinc-900"
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  layout
                  className="flex w-full flex-row items-center self-center justify-between"
                >
                  <motion.div
                    layout
                    className="flex flex-row space-x-2 items-center text-amber-400 font-medium"
                  >
                    <ShootingStar weight="duotone" size={16} />
                    <Link href="/">turbobiz</Link>
                  </motion.div>
                  <motion.div className="flex flex-row space-x-2 items-center">
                    <NavSignIn variant="fill"/>
                    <Hamburger
                      color="#fbbf24"
                      rounded
                      size={20}
                      toggled={isOpen}
                      toggle={setIsOpen}
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="popLayout">
                <NavLinks isOpen={isOpen} />
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </LayoutGroup>
      </AnimatePresence>
    </MotionConfig>
  );
};

export default Nav;
