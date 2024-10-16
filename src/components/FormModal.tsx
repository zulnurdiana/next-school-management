"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>,
});

const ParentForm = dynamic(() => import("./forms/ParentForm"), {
  loading: () => <h1>Loading...</h1>,
});
const SubjectForm = dynamic(() => import("./forms/SubjectForm"), {
  loading: () => <h1>Loading...</h1>,
});
const ClassesForm = dynamic(() => import("./forms/ClassesForm"), {
  loading: () => <h1>Loading...</h1>,
});
const LessonForm = dynamic(() => import("./forms/LessonForm"), {
  loading: () => <h1>Loading...</h1>,
});
const ExamForm = dynamic(() => import("./forms/ExamForm"), {
  loading: () => <h1>Loading...</h1>,
});
const AssignmentForm = dynamic(() => import("./forms/AssignmentForm"), {
  loading: () => <h1>Loading...</h1>,
});
const ResultForm = dynamic(() => import("./forms/ResultForm"), {
  loading: () => <h1>Loading...</h1>,
});
const EventForm = dynamic(() => import("./forms/EventForm"), {
  loading: () => <h1>Loading...</h1>,
});
const AnnouncementForm = dynamic(() => import("./forms/AnnouncementForm"), {
  loading: () => <h1>Loading...</h1>,
});

const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => (
    <TeacherForm type={type} data={data} table="teacher" />
  ),
  student: (type, data) => (
    <StudentForm type={type} data={data} table="student" />
  ),
  parent: (type, data) => <ParentForm type={type} data={data} table="parent" />,
  subject: (type, data) => (
    <SubjectForm type={type} data={data} table="subject" />
  ),
  class: (type, data) => <ClassesForm type={type} data={data} table="class" />,
  lesson: (type, data) => <LessonForm type={type} data={data} table="lesson" />,
  exam: (type, data) => <ExamForm type={type} data={data} table="exam" />,
  assignment: (type, data) => (
    <AssignmentForm type={type} data={data} table="assignment" />
  ),
  result: (type, data) => <ResultForm type={type} data={data} table="result" />,
  event: (type, data) => <EventForm type={type} data={data} table="event" />,
  announcement: (type, data) => (
    <AnnouncementForm type={type} data={data} table="announcement" />
  ),
};

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
  id?: number | string;
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
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "Form not found!"
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
