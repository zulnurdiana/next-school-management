import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { assignmentsData, role } from "@/lib/data";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { Assignment, Class, Prisma, Subject, Teacher } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type AssignmentList = Assignment & {
  lesson: {
    subject: Subject;
    class: Class;
    teacher: Teacher;
  };
};

const columns = [
  {
    header: "Subject Name",
    accessor: "subjectName",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Due Date",
    accessor: "dueDate",
    className: "hidden md:table-cell",
  },

  {
    header: "Actions",
    accessor: "action",
  },
];

const renderRow = (item: AssignmentList) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 text-xs even:bg-slate-50 hover:bg-lamaPurpleLight"
  >
    <td className="">{item.lesson.subject.name}</td>
    <td className="">{item.lesson.class.name}</td>
    <td className="hidden md:table-cell">
      {item.lesson.teacher.name + " " + item.lesson.teacher.surname}{" "}
    </td>
    <td className="hidden md:table-cell">
      {new Intl.DateTimeFormat("en-US").format(item.dueDate)}
    </td>

    <td className="p-2">
      <div className="flex items-center gap-2">
        {role === "admin" && (
          <>
            <FormModal table="assignment" type="update" data={item} />
            <FormModal table="assignment" type="delete" id={item.id} />
          </>
        )}
      </div>
    </td>
  </tr>
);
const AssignmentListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParams } = searchParams;

  const query: Prisma.AssignmentWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "classId":
            query.lesson = { classId: parseInt(value) };
            break;
          case "teacherId":
            query.lesson = { teacherId: value };
            break;
          case "search":
            query.lesson = {
              subject: {
                name: {
                  contains: value,
                  mode: "insensitive",
                },
              },
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
    prisma.assignment.findMany({
      where: query,
      include: {
        lesson: {
          select: {
            subject: {
              select: {
                name: true,
              },
            },
            class: {
              select: {
                name: true,
              },
            },
            teacher: {
              select: {
                name: true,
                surname: true,
              },
            },
          },
        },
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.assignment.count({
      where: query,
    }),
  ]);

  return (
    <div className=" bg-white rounded-md p-4 mt-0 flex-1">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-xl font-semibold">
          All Assignments
        </h1>
        <div className="w-full flex items-center md:w-auto flex-col md:flex-row gap-4">
          <TableSearch />
          <div className="flex items-center self-end gap-4">
            <button className="w-8 h-8 flex items-center justify-center bg-lamaYellow rounded-full">
              <Image src={"/filter.png"} alt={""} height={14} width={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-lamaYellow rounded-full">
              <Image src={"/sort.png"} alt={""} height={14} width={14} />
            </button>
            {role === "admin" && <FormModal table="assignment" type="create" />}
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

export default AssignmentListPage;
