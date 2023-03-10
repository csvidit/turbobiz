const BasicCategories = () => {
  const categories = [
    { id: 1, name: "Agriculture & Forestry", unavailable: false },
    { id: 2, name: "Business and Information", unavailable: false },
    { id: 3, name: "Construction & Utilities", unavailable: false },
    { id: 4, name: "Education", unavailable: false },
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

  return (

    <select className="select select-warning w-full max-w-xs text-black bg-zinc-200 font-sans font-medium">
        {categories.map(item => <option key = {item.id}>{item.name}</option>)}
    </select>
  );
};

export default BasicCategories;