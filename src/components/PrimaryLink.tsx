import {
    motion,
    AnimatePresence,
    MotionConfig,
  } from "framer-motion";
  import Link from "next/link";
import { PiArrowUpRight, PiArrowRight } from "react-icons/pi";

  import { UrlObject } from "url";

  const colors = {
    dark: "#171717",
    light: "#f5f5f5",
  };
  
  const PrimaryLink = (props: {
    children: React.ReactNode;
    href: string | UrlObject;
    variant: string; // can be fill or outline
    external: boolean;
    className?: string;
  }) => {

    const variant = props.variant;
    const color = variant == "fill" ? colors.dark : colors.light;
    const backgroundColor = variant == "fill" ? colors.light : colors.dark;
    const mainDivVariants = {
      initial: {
        color: color,
        backgroundColor: backgroundColor,
        borderColor: backgroundColor,
        scale: 1,
        opacity: 1,
      },
      hover: {
        color: backgroundColor,
        backgroundColor: color,
        borderColor: backgroundColor,
        scale: 1.05,
        opacity: 1,
      },
    };
  
    const textVariants1 = {
      initial: {
        color: color,
        display: "flex",
        opacity: 1,
        translateY: "0%",
      },
      hover: {
        color: backgroundColor,
        display: "none",
        opacity: 0,
        translateY: "-100%",
      },
    };
    const textVariants2 = {
      initial: {
        color: color,
        display: "none",
        opacity: 0,
        translateY: "+100%",
      },
      hover: {
        color: backgroundColor,
        display: "flex",
        opacity: 1,
        translateY: "0%",
      },
    };
  
    return (
      <MotionConfig
        transition={{
          type: "spring",
          duration: 0.2,
          damping: 20,
          stiffness: 200,
        }}
      >
        <Link
          href={props.href}
          className={`flex bg-opacity-100 w-fit`}
        >
          <motion.div
            variants={mainDivVariants}
            initial="initial"
            whileHover="hover"
            layout
            className={`group w-fit h-full px-2 py-1 flex flex-row items-center group justify-between space-x-2 text-base border rounded-md overflow-hidden font-light`}
          >
            <motion.div className="flex flex-col overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div layout variants={textVariants1}>
                  {props.children}
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.div layout variants={textVariants2}>
                  {props.children}
                </motion.div>
              </AnimatePresence>
            </motion.div>
            <AnimatePresence>
              <motion.div
                variants={textVariants1}
                layout
                className={`flex flex-row items-center space-x-2`}
              >
                {props.external === true ? <PiArrowUpRight /> : <PiArrowRight />}
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                variants={textVariants2}
                layout
                className={`flex flex-row items-center space-x-2`}
              >
                {props.external === true ? <PiArrowUpRight /> : <PiArrowRight />}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </Link>
      </MotionConfig>
    );
  };
  
  export default PrimaryLink;
  