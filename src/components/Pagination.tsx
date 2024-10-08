import React from "react";

const Pagination = () => {
  return (
    <div className="flex items-center justify-between text-gray-500 p-4">
      <button
        disabled
        className="px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50 bg-slate-200 rounded-sm font-semibold text-xs"
      >
        Prev
      </button>
      <div className="flex items-center  gap-2 text-sm">
        <button className="px-2 rounded-sm bg-lamaSky ">1</button>
        <button className="px-2 rounded-sm">2</button>
        <button className="px-2 rounded-sm">3</button>
        ...
        <button className="px-2 rounded-sm">10</button>
      </div>
      <button className="px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50 bg-slate-200 rounded-sm font-semibold text-xs">
        Next
      </button>
    </div>
  );
};

export default Pagination;
