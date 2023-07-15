import { Dispatch, SetStateAction, useState } from "react";
import Subtitle from "../Subtitle";

const categories = [
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

const PrimarySelect = (props: {selectedCategory: number, setSelectedCategory: Dispatch<SetStateAction<number>>, categoryName: string, setCategoryName: Dispatch<SetStateAction<string>>}) => {
  return (
    <div>
      <label htmlFor="countries" className="block mb-2 text-zinc-300">
        <Subtitle>choose a category</Subtitle>
      </label>
      <select
        id="countries"
        className="bg-zinc-900 border border-zinc-300 text-zinc-300 rounded-lg focus:ring-amber-400 focus:border-amber-400 block p-2 dark:placeholder-zinc-300"
        value={props.selectedCategory}
        onChange={(e) => {
          props.setSelectedCategory(parseInt(e.target.value));
          props.setCategoryName(categories[(parseInt(e.target.value))-1].name)
          console.log(e.target.value);
        }}
      >
        <option key={0} value={0}>
          Select...
        </option>
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
