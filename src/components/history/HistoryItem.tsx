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
    <li className="w-full py-4 grid grid-cols-2 lg:grid-cols-4 border-b border-b-zinc-800 list-none">
      <li className="w-fit text-lg lg:text-xl font-medium justify-self-start">
        {props.data.businessName}
      </li>
      <li className="hidden lg:flex justify-self-center text-left">{categories.at(parseInt(props.data.category))?.name}</li>
      <li className="hidden lg:flex justify-self-center">{props.data.country}</li>
      <li className="w-fit justify-self-end">
        <SecondaryButton
          onClick={() => {
            setModalOpen(!isModalOpen);
          }}
          external={false}
          className=""
        >
          Details
        </SecondaryButton>
      </li>

      {isModalOpen && (
        <HistoryModal setModalOpen={setModalOpen} data={props.data} />
      )}
    </li>
  );
};

export default HistoryItem;
