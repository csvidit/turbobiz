import { PuffLoader } from "react-spinners";

const HistoryLoading = () => {
  return (
    <div className="flex flex-row space-x-4 items-center w-full h-full rounded-md bg-zinc-950 border border-opacity-30 border-amber-400 p-4">
      <div className="text-amber-400 text-xl lg:text-2xl font-light">
        fetching data...
      </div>
      <PuffLoader color="currentColor" size={32} />
    </div>
  );
};

export default HistoryLoading;
