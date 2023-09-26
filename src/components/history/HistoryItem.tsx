import { History } from "@/pages/history";
import HistoryItemTitle from "./HistoryItemTitle";
import PrimaryButton from "../PrimaryButton";
import { useState } from "react";
import HistoryModal from "./HistoryModal";
import { categories } from "../create/PrimarySelect";
import SecondaryButton from "../SecondaryButton";

const HistoryItem = (props: { data: History }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const test = categories.at(parseInt(props.data.category))?.name;

  return (
    <div className="w-full py-4 grid grid-cols-2 lg:grid-cols-4 border-b border-b-zinc-800 divst-none">
      <div className="w-fit text-lg lg:text-xl font-medium justify-self-start">
        {props.data.businessName}
      </div>
      <div className="hidden lg:flex justify-self-center text-left">{categories.at(parseInt(props.data.category))?.name}</div>
      <div className="hidden lg:flex justify-self-center">{props.data.country}</div>
      <div className="w-fit justify-self-end">
        <SecondaryButton
          onClick={() => {
            setModalOpen(!isModalOpen);
          }}
          external={false}
          className=""
        >
          Details
        </SecondaryButton>
      </div>

      {isModalOpen && (
        <HistoryModal setModalOpen={setModalOpen} data={props.data} />
      )}
    </div>
  );
};

export default HistoryItem;
