import { MotionConfig } from "framer-motion";``

const MotionTransition = (props: { children: React.ReactNode }) => {
  return (
    <MotionConfig
      transition={{
        type: "just",
        duration: 0.2,
        ease: "easeInOut",
      }}
    >{props.children}</MotionConfig>
  );
};

export default MotionTransition;