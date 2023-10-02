import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PiArrowUpRight, PiArrowRight } from "react-icons/pi";
import { UrlObject } from "url";
import MotionTransition from "./MotionTransition";

const SecondaryLink = (props: {
  children: React.ReactNode;
  href: string | UrlObject;
  external: boolean;
  inline?: boolean;
  className?: string;
}) => {
  const colors = {
    dark: "#52525b",
    light: "#d4d4d8",
    amber: "#fbbf24",
  };

  const mainDivVariants = {
    initial: {
      color: colors.light,
      borderColor: colors.light,
    },
    hover: {
      borderColor: colors.amber,
    },
  };

  const textVariants1 = {
    initial: {
      display: "flex",
      opacity: 1,
      translateY: "0%",
    },
    hover: {
      display: "none",
      opacity: 0,
      translateY: "-100%",
    },
  };
  const textVariants2 = {
    initial: {
      display: "none",
      opacity: 0,
      translateY: "+100%",
    },
    hover: {
      display: "flex",
      opacity: 1,
      translateY: "0%",
    },
  };

  return (
    <MotionTransition>
      <Link
        href={props.href}
        className={`flex bg-opacity-100 w-fit ${
          props.inline ? "inline flex-wrap" : ""
        } ${props.className}`}
        target={props.external ? "_blank" : ""}
      >
        <motion.div
          variants={mainDivVariants}
          initial="initial"
          whileHover="hover"
          layout
          className={`group w-fit h-full flex flex-row ${
            props.inline ? "inline flex-wrap" : ""
          } items-center group justify-start space-x-2 border-b overflow-hidden font-light`}
        >
          <motion.div className={`flex flex-col overflow-hidden`}>
            <AnimatePresence mode="popLayout">
              <motion.div layout variants={textVariants1} className="flex">
                {props.children}
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="popLayout">
              <motion.div layout variants={textVariants2} className="flex">
                {props.children}
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <motion.div
            variants={textVariants1}
            layout
            className={`flex flex-row items-center space-x-2`}
          >
            {props.external === true ? <PiArrowUpRight /> : <PiArrowRight />}
          </motion.div>
          <motion.div
            variants={textVariants2}
            layout
            className={`flex flex-row items-center space-x-2`}
          >
            {props.external === true ? <PiArrowUpRight /> : <PiArrowRight />}
          </motion.div>
        </motion.div>
      </Link>
    </MotionTransition>
  );
};

export default SecondaryLink;
