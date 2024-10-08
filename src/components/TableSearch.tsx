import Image from "next/image";
import React from "react";

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 rounded-full ring-[1.5px] ring-gray-300 px-2">
      <Image src={"/search.png"} alt="" height={20} width={20} />
      <input
        type="text"
        placeholder="Search from table ..."
        className="outline-none w-[200px] p-2 bg-transparent"
      />
    </div>
  );
};

export default TableSearch;
