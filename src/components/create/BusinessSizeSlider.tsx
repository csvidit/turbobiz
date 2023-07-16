import { Steps } from "@phosphor-icons/react";
import { Dispatch, SetStateAction } from "react";

const BusinessSizeSlider = (props: {
  businessSize: number;
  setBusinessSize: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label
        htmlFor="business-size-range"
        className="flex flex-row space-x-2 items-center"
      >
        <Steps size={16} />
        <div>Business Size</div>
      </label>
      <input
        value={props.businessSize}
        onChange={(e) => {
          props.setBusinessSize(parseInt(e.target.value));
        }}
        type="range"
        className="transparent h-1.5 w-full cursor-pointer text-amber-400 focus:text-amber-400 appearance-none rounded-lg border-transparent bg-zinc-600"
        min="0"
        max="2"
        step="1"
        id="business-size-range"
      />
      <div className="flex flex-row items-center text-sm justify-between">
        <div
          className={`transition-colors ${
            props.businessSize == 0 ? "text-amber-400" : ""
          }`}
        >
          Small
        </div>
        <div
          className={`transition-colors ${
            props.businessSize == 1 ? "text-amber-400" : ""
          }`}
        >
          Medium
        </div>
        <div
          className={`transition-colors ${
            props.businessSize == 2 ? "text-amber-400" : ""
          }`}
        >
          Large
        </div>
      </div>
    </div>
  );
};

export default BusinessSizeSlider;
