import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { UrlObject } from "url";

const MainLink = (props: { href: string | UrlObject; children: any }) => {
  const linkVariants = {
    hover: {
      borderBottomColor: "#94a3b8",
    },
  };

  const linkArrowVariants = {
    hover: {
      visibility: "visible",
    },
  };

  return (
    <motion.div
      className="w-2/4 mt-5 text-slate-400 pb-2 border-b-2 border-b-transparent"
      variants={linkVariants}
      whileHover="hover"
    >
      <Link
        className="flex flex-row justify-between text-3xl items-center"
        href={props.href}
        rel="noreferrer noopener"
      >
        <p>{props.children}</p>
        <motion.div className="invisible" variants={linkArrowVariants}>
          <BsArrowRight />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default MainLink;
