import Title from "./Title";
import { PuffLoader } from "react-spinners";
import { PiShootingStarDuotone } from "react-icons/pi";

const Loading = () => {
  return (
    <div className="h-full flex flex-col w-11/12 lg:w-10/12 self-center space-y-8">
      <div className="flex flex-row space-x-2 relative items-center text-amber-400">
        <PiShootingStarDuotone size={32} />
        <Title>turbobiz</Title>
      </div>
      <div className="text-2xl lg:text-4xl">
        <PuffLoader color="currentColor" size={16} />
      </div>
    </div>
  );
};

export default Loading;