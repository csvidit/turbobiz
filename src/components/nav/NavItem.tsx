import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { PiArrowRight } from "react-icons/pi";

const NavItem = (props: { href: string; children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      <Link
        href={props.href}
        className="flex flex-row items-center group w-fit"
      >
        <motion.div
          layout
          className="flex flex-row space-x-2 items-center py-1 w-full justify-between rounded-lg text-zinc-300 group-hover:ease-in-out group-hover:transition-all group-hover:text-amber-400 group-hover:transform"
        >
          <motion.div>{props.children}</motion.div>
          <PiArrowRight size={12} className="flex scale-0 group-hover:scale-100 group-hover:ease-in-out group-hover:transition-transform" />
        </motion.div>
      </Link>
    </AnimatePresence>
  );
};

export default NavItem;
