import { History } from "@/pages/history";
import {
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
  motion,
} from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import PrimaryButton from "../PrimaryButton";
import { PiXBold } from "react-icons/pi";
import BusinessName from "../create/BusinessName";
import SecondaryLink from "../SecondaryLink";
import TertiaryLink from "../TertiaryLink";

const HistoryModal = (props: {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  data: History;
}) => {
  return (
    <AnimatePresence>
      <MotionConfig
        transition={{
          type: "just",
          duration: 0.2,
          ease: "easeInOut"
          // damping: 20,
          // stiffness: 200,
        }}
      >
        <LayoutGroup>
          <AnimatePresence>
            <motion.div
              initial={{ scale: 0.75, opacity: 0 }}
              animate={{ scale: 0.99, opacity: 1 }}
              exit={{ scale: 0.75, opacity: 0 }}
              layout
              className="z-50 fixed top-0 bottom-0 right-0 left-0 w-screen h-screen flex flex-col justify-center items-center bg-zinc-900 bg-opacity-60 m-0 p-0 overflow-hidden backdrop-blur-md"
            >
              <motion.div
                layout
                className="relative w-11/12 h-11/12 lg:w-1/2 lg:h-1/2 h-fit p-4 flex flex-col space-y-2 bg-zinc-950 rounded-md border border-opacity-30 border-amber-400"
              >
                <div className="absolute right-4 top-4">
                  <PrimaryButton
                    onClick={() => {
                      props.setModalOpen(false);
                    }}
                    external={false}
                    variant="outline"
                    className="self-end"
                  >
                    <div className="p-1">
                      <PiXBold />
                    </div>
                  </PrimaryButton>
                </div>
                <BusinessName>{props.data.businessName}</BusinessName>
                <motion.div>{props.data.businessDescription}</motion.div>
                <div className="text-amber-400">possible domain names:</div>
                <div>
                  {props.data.businessDomains.map((x, index) => (
                    <div key={index}>
                      <SecondaryLink
                        external={true}
                        href={`https://www.namecheap.com/domains/registration/results/?domain=${x.replace(
                          /['"]/g,
                          ""
                        )}`}
                      >
                        {x.replace(/['"]/g, "")}
                      </SecondaryLink>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </LayoutGroup>
      </MotionConfig>
    </AnimatePresence>
  );
};

export default HistoryModal;
