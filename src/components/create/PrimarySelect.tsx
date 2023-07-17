import { Dispatch, SetStateAction, useState } from "react";
import Subtitle from "../Subtitle";
// import { Buildings } from "@phosphor-icons/react";

const categories = [
  { id: 0, name: "Select...", unavailable: false },
  { id: 1, name: "Agriculture & Forestry", unavailable: false },
  { id: 2, name: "Business and Information", unavailable: false },
  { id: 3, name: "Construction & Utilities", unavailable: false },
  { id: 4, name: "Education", unavailable: true },
  { id: 5, name: "Finance & Insurance", unavailable: false },
  { id: 6, name: "Food & Hospitality", unavailable: false },
  { id: 7, name: "Gaming", unavailable: false },
  { id: 8, name: "Health Services", unavailable: false },
  { id: 9, name: "Natural Resources & Environment", unavailable: false },
  { id: 10, name: "Personal Services", unavailable: false },
  { id: 11, name: "Real Estate & Housing", unavailable: false },
  { id: 12, name: "Security & Legal", unavailable: false },
  { id: 13, name: "Transportation", unavailable: false },
];

const PrimarySelect = (props: {
  selectedCategory: number;
  setSelectedCategory: Dispatch<SetStateAction<number>>;
  categoryName: string;
  setCategoryName: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label
        htmlFor="categories"
        className="flex flex-row space-x-2 items-center text-zinc-300"
      >
        {/* <Buildings weight="duotone" size={24} /> */}
        <Subtitle>industry</Subtitle>
      </label>
      <select
        id="categpories"
        className="bg-zinc-900 border w-full border-zinc-300 text-zinc-300 rounded-lg focus:ring-amber-400 focus:border-amber-400 block p-2 dark:placeholder-zinc-300"
        value={props.selectedCategory}
        onChange={(e) => {
          console.log("SELECT CHANGE TARGET VALUE", e.target.value);
          console.log(
            "SELECTED CATEGORY",
            categories[parseInt(e.target.value)].name
          );
          props.setSelectedCategory(parseInt(e.target.value));
          props.setCategoryName(categories[parseInt(e.target.value)].name);
          console.log(e.target.value);
        }}
      >
        {/* <option key={-1} value={0}>
          Select...
        </option> */}
        {categories.map((x, index) => (
          <option key={x.id} value={x.id}>
            {x.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PrimarySelect;
