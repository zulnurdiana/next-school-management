import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full bg-white rounded-md p-4 mt-0 flex-1">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-xl font-semibold">All Teachers</h1>
        <div className="w-full flex items-center md:w-auto flex-col md:flex-row gap-4">
          <TableSearch />
          <div className="flex items-center self-end gap-4">
            <button className="w-8 h-8 flex items-center justify-center bg-lamaYellow rounded-full">
              <Image src={"/filter.png"} alt={""} height={14} width={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-lamaYellow rounded-full">
              <Image src={"/sort.png"} alt={""} height={14} width={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-lamaYellow rounded-full">
              <Image src={"/plus.png"} alt={""} height={14} width={14} />
            </button>
          </div>
        </div>
      </div>
      {/* LIST */}

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default page;
