import Title from "./Title";
import { PuffLoader } from "react-spinners";
import { PiShootingStarDuotone } from "react-icons/pi";
import Subtitle from "./Subtitle";

const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center self-center space-y-8">
      <div className="w-full flex flex-row space-x-2 relative justify-center items-center text-amber-400 animate-pulse">
        <PiShootingStarDuotone size={32} className="" />
        <div className="text-xl lg:text-2xl">turbobiz</div>
      </div>
      <div className="w-full flex flex-col space-y-2 justify-center items-center">
        {/* <div className="text-2xl lg:text-4xl">Loading</div> */}
        <PuffLoader color="currentColor" size={32} />
      </div>
    </div>
  );
};

export default Loading;
