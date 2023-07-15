import { ShootingStar } from "@phosphor-icons/react";
import Title from "./Title";
import Subtitle from "./Subtitle";
import { PuffLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-full flex flex-col w-11/12 lg:w-10/12 self-center space-y-8">
      <div className="flex flex-row space-x-2 relative items-center text-amber-400">
        <ShootingStar weight="duotone" size={32} />
        <Title>turbobiz</Title>
      </div>
      <div className="text-2xl lg:text-4xl">
        <PuffLoader color="currentColor" size={16} />
      </div>
    </div>
  );
};

export default Loading;