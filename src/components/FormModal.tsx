"use client";

import Image from "next/image";
import { useState } from "react";

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurpleLight";

  const img =
    type === "create" ? "plus" : type === "update" ? "edit" : "delete";

  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" && id ? (
      <form
        action={""}
        className="flex flex-col gap-4 items-center justify-center"
      >
        <span className="font-medium text-center">
          Are you sure you want to delete this {table}
        </span>
        <button className="py-2 px-5 bg-red-700 rounded-md border-none text-white">
          Delete
        </button>
      </form>
    ) : (
      "create or update"
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(!open)}
      >
        <Image src={`/${img}.png`} alt={""} height={16} width={16} />
      </button>

      {open && (
        <div className="w-screen h-screen bg-black bg-opacity-60 z-50 absolute flex items-center justify-center  rounded-md top-0 left-0 ">
          <div className="bg-white p-5 rounded-md w-[90%] md:w-[70%] lg:w-[65%] xl:w-[55%] 2xl:w-[45%] relative">
            <Form />
            <div
              className="absolute top-1 right-2 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src={"/close.png"} alt={""} height={20} width={20} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
