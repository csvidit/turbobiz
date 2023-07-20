import { PiShootingStarDuotone } from "react-icons/pi"
import Title from "./Title"

const TurbobizTitle = () => {
    return <div className="flex flex-row space-x-2 relative items-center text-amber-400">
    <PiShootingStarDuotone size={32} />
    <div className="flex flex-row space-x-2 items-center">
      <Title>turbobiz</Title>
      <div className="px-1 py-0.5 rounded text-xs bg-zinc-950 border border-zinc-800 text-amber-400 text-opacity-60">
        beta
      </div>
    </div>
  </div>
};

export default TurbobizTitle;