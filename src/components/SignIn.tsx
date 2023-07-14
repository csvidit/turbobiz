import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/firebase.config";
import PrimaryButton from "./PrimaryButton";
import { ArrowRight, ArrowUpRight, GoogleLogo } from "@phosphor-icons/react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

const colors = {
  dark: "#171717",
  light: "#f5f5f5",
};

const SignIn = (props: { variant: string }) => {
  const [signInWithGoogle, user, loading, fbError] = useSignInWithGoogle(auth);
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
      <button
        onClick={() => signInWithGoogle()}
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
              <motion.div
                layout
                variants={textVariants1}
                className="flex-row space-x-1 items-center"
              >
                
                <GoogleLogo weight="bold" size={20} />
                <motion.div>Sign In</motion.div>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
            <motion.div
                layout
                variants={textVariants2}
                className="flex-row space-x-2 items-center"
              >
                 <GoogleLogo weight="bold" size={20} />
                <motion.div>Sign In</motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </button>
    </MotionConfig>
  );
};

export default SignIn;
