import { PuffLoader } from "react-spinners";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

const CreateLoading = () => {
  return (
    <MotionConfig
      transition={{
        type: "spring",
        duration: 0.35,
      }}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="flex flex-col justify-center items-center lg:w-2/3 space-y-4 w-full rounded-md bg-zinc-950 border border-opacity-30 border-amber-400 p-4"
        >
          <motion.div className="text-amber-400 text-xl lg:text-2xl font-light">
            generating
          </motion.div>
          <PuffLoader color="currentColor" size={32} />
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  );
};

export default CreateLoading;
