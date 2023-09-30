import {
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
  motion,
} from "framer-motion";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import NavLinks from "./NavLinks";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import NavSignIn from "./NavSignIn";
import NavSignOut from "./NavSignOut";
import { User } from "firebase/auth";
import { PiShootingStarDuotone } from "react-icons/pi";
import { AuthContext } from "@/AuthContext";

const Nav = (props: {
  // currentUser: User | undefined;
  // setCurrentUser: Dispatch<SetStateAction<User | undefined>>;
}) => {

  const user = useContext(AuthContext);

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
                borderRadius: "0.5rem",
                border: "1px solid #27272a",
              }}
              className={`z-40 flex flex-col absolute top-5 lg:top-10 w-11/12 lg:w-10/12 rounded-lg items-start bg-zinc-950`}
            >
              <AnimatePresence mode="popLayout"> 
                <motion.div
                  layout
                  className="flex w-full flex-row items-center self-center justify-between"
                >
                  <motion.div
                    layout
                    className="ml-2.5 flex flex-row space-x-2 items-center text-amber-400"
                  >
                    <PiShootingStarDuotone />
                    
                    <Link href="/">turbobiz</Link>
                  </motion.div>
                  <motion.div className="flex flex-row space-x-2 items-center">
                    {/* {props.currentUser == null ? (
                      <NavSignIn setCurrentUser={props.setCurrentUser} variant="fill" />
                    ) : (
                      <NavSignOut setCurrentUser={props.setCurrentUser} name={props.currentUser.displayName} />
                    )} */}
                    {user == null || undefined ? (
                      <NavSignIn variant="fill" />
                    ) : (
                      <NavSignOut />
                    )}

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
