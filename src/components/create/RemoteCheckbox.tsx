import { Graph } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

const RemoteCheckbox = (props: {
  isRemote: boolean;
  setRemote: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        layout
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        className="flex flex-row space-x-2 items-center"
      >
        <motion.input
          checked={props.isRemote}
          onChange={(e) => {
            props.setRemote(e.target.checked);
          }}
          type="checkbox"
          id="hs-basic-usage"
          className="rounded bg-zinc-600 checked:bg-amber-400 checked:text-amber-400 focus:ring-offset-zinc-950 focus:ring-0 outline-none focus:outline-none checked:outline-none "
        />
        <motion.label
          htmlFor="hs-basic-usage"
          className="flex flex-row space-x-1 items-center"
        >
          <Graph weight="duotone" size={16} />
          <div>Remote Company</div>
        </motion.label>
      </motion.div>
    </AnimatePresence>
  );
};

export default RemoteCheckbox;
