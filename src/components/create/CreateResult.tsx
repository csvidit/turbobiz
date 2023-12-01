import { AnimatePresence, motion } from "framer-motion";
import SecondaryLink from "../SecondaryLink";
import BusinessName from "./BusinessName";
import { ResponseData } from "./Create";

const CreateResult = (props: { responseData: ResponseData }) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div className="flex flex-col space-y-4 lg:w-2/3">
        <motion.div className="flex flex-col space-y-4 w-full h-full rounded-md bg-zinc-950 border border-opacity-30 border-amber-400 p-4">
          <motion.div className="text-amber-400 text-xl lg:text-2xl font-light">
            your business should be called
          </motion.div>
          <BusinessName>{props.responseData.businessName}</BusinessName>
          <motion.div>{props.responseData.businessDescription}</motion.div>
          <div className="flex flex-col space-y-2">
            <div className="text-amber-400">possible domain names:</div>

            {props.responseData.businessDomains.map((x, index) => (
              <SecondaryLink
                key={index}
                external={true}
                href={`https://www.namecheap.com/domains/registration/results/?domain=${x.replace(
                  /['"]/g,
                  ""
                )}`}
              >
                {x.replace(/['"]/g, "")}
              </SecondaryLink>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CreateResult;
