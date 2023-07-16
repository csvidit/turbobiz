import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/firebase.config";
import PrimaryButton from "./PrimaryButton";
import { ArrowRight, ArrowUpRight, GoogleLogo } from "@phosphor-icons/react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { GoogleAuthProvider, User, signInWithPopup } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { Dispatch, SetStateAction } from "react";

const colors = {
  dark: "#171717",
  light: "#f5f5f5",
};

const SignIn = (props: {
  variant: string;
  children: React.ReactNode;
  currentUser: User | undefined;
  setCurrentUser: Dispatch<SetStateAction<User | undefined>>;
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
      <button
        onClick={async () => {
          await signInWithPopup(auth, new GoogleAuthProvider()).then(
            async (userCred) => {
              auth.updateCurrentUser(userCred.user);
              props.setCurrentUser(userCred.user);
            }
          );
        }}
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
                <motion.div>{props.children}</motion.div>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                layout
                variants={textVariants2}
                className="flex-row space-x-2 items-center"
              >
                <GoogleLogo weight="bold" size={20} />
                <motion.div>{props.children}</motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </button>
    </MotionConfig>
  );
};

export default SignIn;
