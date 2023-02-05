import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiChevronUpDown, HiCheck } from "react-icons/hi2";

const categories = [
    { id: 1, name: 'Agriculture & Forestry', unavailable: false },
    { id: 2, name: 'Business and Information', unavailable: false },
    { id: 3, name: 'Construction & Utilities', unavailable: false },
    { id: 4, name: 'Education', unavailable: true },
    { id: 5, name: 'Finance & Insurance', unavailable: false },
    { id: 6, name: 'Food & Hospitality', unavailable: false },
    { id: 7, name: 'Gaming', unavailable: false },
    { id: 8, name: 'Health Services', unavailable: false },
    { id: 9, name: 'Natural Resources & Environment', unavailable: false },
    { id: 10, name: 'Personal Services', unavailable: false },
    { id: 11, name: 'Real Estate & Housing', unavailable: false },
    { id: 12, name: 'Security & Legal', unavailable: false },
    { id: 13, name: 'Transportation', unavailable: false },
  ]

import { Darker_Grotesque } from "@next/font/google";

const dg = Darker_Grotesque({
    variable: "--darker-grotesque-font",
    subsets: ["latin"],
    weight: "600"
});

const Categories = () =>
{
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    // return (
    //     <Listbox value={selectedCategory} onChange={setSelectedCategory}>
    //       <Listbox.Button>{selectedCategory.name}</Listbox.Button>
    //       <Listbox.Options>
    //         {categories.map((categories) => (
    //           <Listbox.Option
    //             key={categories.id}
    //             value={categories}
    //             disabled={categories.unavailable}
    //           >
    //             {categories.name}
    //           </Listbox.Option>
    //         ))}
    //       </Listbox.Options>
    //     </Listbox>
    // );
    return (
        <div className="w-72 text-xl">
          <Listbox value={selectedCategory} onChange={setSelectedCategory}>
            <div className="relative mt-1 text-lg">
              <Listbox.Button className={"relative w-full cursor-default rounded-lg bg-zinc-900 dark:bg-zinc-200 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 "+dg.className}>
                <span className="block truncate">{selectedCategory.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <HiChevronUpDown
                    className="h-5 w-5 text-zinc-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {categories.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 `+dg.className+" "+` ${
                          active ? 'bg-amber-100 text-amber-900' : 'text-zinc-900'
                        }`
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <HiCheck className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
    );
};

export default Categories;
