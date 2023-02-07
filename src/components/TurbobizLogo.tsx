import { easeInOut, motion } from "framer-motion";
import React from "react";

const TurbobizLogo = (props: {size: string}) => {


  return (
    <React.Fragment>
      <motion.svg
        width="150px"
        height="150px"
        viewBox="0 0 3500 1813"
        version="1.1"
        className="flex flex-col items-end"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: 2,
        }}
      >
        <motion.g transform="matrix(1,0,0,1,-1250,-1593.75)">
          <motion.g transform="matrix(0.987362,0,0,0.868056,294.234,394.097)">
            <motion.path
              d="M3500,1382L968,1958L1727.6,1670L3500,1670L3500,1382Z"
              style={{ fill: "#FBBF24" }}
              animate={{ opacity: [0, 1], transition: {delay: 0.25, ease: "easeInOut", repeat: 2, duration: 0.5}}}
            />
          </motion.g>
          <motion.g transform="matrix(0.987362,0,0,0.868056,1294.23,1050.35)">
            <motion.path
              d="M3500,1382L968,1958L1474.4,1670L3500,1670L3500,1382Z"
              style={{ fill: "#FBBF24" }}
              animate={{ opacity: [0, 1], transition: {delay: 0.5, ease: "easeInOut", repeat: 2, duration: 0.5}}}
            />
          </motion.g>
          <motion.g transform="matrix(0.987362,0,0,0.868056,294.234,1706.6)">
            <motion.path
              d="M3500,1382L968,1958L1474.4,1670L3500,1670L3500,1382Z"
              style={{ fill: "#FBBF24" }}
              animate={{ opacity: [0, 1], transition: {delay: 0.75, ease: "easeInOut", repeat: 2, duration: 0.5}}}
            />
          </motion.g>
        </motion.g>
      </motion.svg>
    </React.Fragment>
  );
};

export default TurbobizLogo;
