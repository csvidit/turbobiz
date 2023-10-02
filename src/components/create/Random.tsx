import { motion } from "framer-motion";
import { PiSparkleDuotone, PiSparkleFill } from "react-icons/pi";
import MotionTransition from "../MotionTransition";

const RandomButton = (props: { onClick: any }) => {
  const mainDivVariants = {
    initial: {
      color: "#d8b4fe",
      backgroundColor: "#9333ea",
      borderColor: "#d8b4fe",
      scale: 1,
      opacity: 1,
    },
    hover: {
      color: "#9333ea",
      backgroundColor: "#c084fc",
      borderColor: "#9333ea",
      scale: 1.05,
      opacity: 1,
    },
  };

  const textVariants1 = {
    initial: {
      color: "#d8b4fe",
      display: "flex",
      opacity: 1,
      translateY: "0%",
    },
    hover: {
      color: "#9333ea",
      display: "none",
      opacity: 0,
      translateY: "-100%",
    },
  };
  const textVariants2 = {
    initial: {
      color: "#fbbf24",
      display: "none",
      opacity: 0,
      translateY: "+100%",
    },
    hover: {
      color: "#fbbf24",
      display: "flex",
      opacity: 1,
      translateY: "0%",
    },
  };

  return (
    <MotionTransition>
      <motion.button
        onClick={props.onClick}
        className={`flex bg-opacity-100 w-fit`}
      >
        <motion.div
          //   variants={mainDivVariants}
          initial="initial"
          whileHover="hover"
          layout
          className={`group w-fit h-full px-2 py-1 flex flex-row items-center group bg-gradient-to-b from-neutral-950 to-purple-950 border border-purple-900 hover:border-purple-600 shadow-inner shadow-purple-900 transition-all duration-200 ease-in-out justify-between space-x-2 text-base rounded-md overflow-hidden font-light`}
        >
          <PiSparkleDuotone className="text-amber-400"/>
          <motion.div layout>Random</motion.div>
        </motion.div>
      </motion.button>
    </MotionTransition>
  );
};

export default RandomButton;
