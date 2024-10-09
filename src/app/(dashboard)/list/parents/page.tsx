import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { parentsData, role, studentsData, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ParentListPage = () => {
  type Parent = {
    id: number;
    name: string;
    students: string[];
    email?: string;
    phone: string;
    address: string;
  };

  const columns = [
    {
      header: "Info",
      accessor: "info",
    },
    {
      header: "Student Name",
      accessor: "studentName",
      className: "hidden md:table-cell",
    },
    {
      header: "Phone",
      accessor: "phone",
      className: "hidden md:table-cell",
    },

    {
      header: "Address",
      accessor: "address",
      className: "hidden lg:table-cell",
    },

    {
      header: "Actions",
      accessor: "action",
    },
  ];

  const renderRow = (item: Parent) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 text-xs even:bg-slate-50 hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h2 className="font-medium">{item.name}</h2>
          <span className="text-xs text-gray-500">{item?.email}</span>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.students.join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src={"/edit.png"} alt={""} height={16} width={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaPurpleLight">
              <Image src={"/delete.png"} alt={""} height={16} width={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className=" bg-white rounded-md p-4 mt-0 flex-1">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-xl font-semibold">All Parents</h1>
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
      <Table columns={columns} renderRow={renderRow} data={parentsData} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ParentListPage;
