import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { parentsData, role, studentsData, teachersData } from "@/lib/data";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { Parent, Prisma, Student } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ParentList = Parent & { students: Student[] };
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

const renderRow = (item: ParentList) => (
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
    <td className="hidden md:table-cell">
      {item.students.map((student) => student.name).join(",")}
    </td>
    <td className="hidden md:table-cell">{item.phone}</td>
    <td className="hidden md:table-cell">{item.address}</td>
    <td>
      <div className="flex items-center gap-2">
        {role === "admin" && (
          <>
            <FormModal table="parent" type="update" data={item} />
            <FormModal table="parent" type="delete" id={item.id} />
          </>
        )}
      </div>
    </td>
  </tr>
);

const ParentListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParams } = searchParams;

  const query: Prisma.ParentWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "search":
            query.name = {
              contains: value,
              mode: "insensitive",
            };
            break;

          default:
            break;
        }
      }
    }
  }

  const p = page ? parseInt(page) : 1;

  const [data, count] = await prisma.$transaction([
    prisma.parent.findMany({
      where: query,
      include: {
        students: true,
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.parent.count({
      where: query,
    }),
  ]);
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
            {role === "admin" && <FormModal table="parent" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={data} />

      {/* PAGINATION */}
      <Pagination page={p} count={count} />
    </div>
  );
};

export default ParentListPage;
