"use client";

import { AnimatePresence, motion } from "framer-motion";
import NavItem from "./NavItem";

const NavLinks = (props: { isOpen: boolean }) => {
  return (
    <AnimatePresence>
      {props.isOpen && (
        <motion.div layout className={`w-full flex-col my-2 text-sm`}>
          <AnimatePresence>
            <motion.div
              layout
              className="flex flex-col items-start space-y-4"
              initial={{ opacity: 0, translateX: 0 }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 0, translateX: 0 }}
              transition={{
                type: "tween",
                duration: 0.2,
                delay: 0.2,
              }}
            >
              <NavItem href="/topia">create a biz</NavItem>
              <NavItem href="/about">readme</NavItem>
              <NavItem href="https://viditkhandelwal.com">
                viditkhandelwal.com
              </NavItem>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavLinks;