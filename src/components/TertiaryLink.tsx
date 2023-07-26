import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { PiArrowRight, PiArrowUpRight } from "react-icons/pi";

const TertiaryLink = (props: {
  children: React.ReactNode;
  href: string;
  external: boolean;
  className?: string;
}) => {
  return (
    <AnimatePresence>
      <Link
        href={props.href}
        target={props.external ? "_blank" : ""}
        className={`flex flex-row items-center group w-fit ${props.className}`}
      >
        <motion.div
          layout
          className="flex flex-row space-x-2 items-center py-1 w-full justify-between rounded-lg text-zinc-300 group-hover:ease-in-out group-hover:transition-all group-hover:text-amber-400 group-hover:transform"
        >
          <motion.div>{props.children}</motion.div>
          {props.external ? (
            <PiArrowUpRight size={12} className="flex scale-0 group-hover:scale-100 group-hover:ease-in-out group-hover:transition-transform" />
          ) : (
            <PiArrowRight size={12} className="flex scale-0 group-hover:scale-100 group-hover:ease-in-out group-hover:transition-transform" />
          )}
        </motion.div>
      </Link>
    </AnimatePresence>
  );
};

export default TertiaryLink;
