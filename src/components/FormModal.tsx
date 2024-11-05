"use client";

import {
  deleteClass,
  deleteStudent,
  deleteSubject,
  deleteTeacher,
} from "@/lib/action";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useFormState } from "react-dom";

import { toast } from "react-toastify";
import { FormContainerProps } from "./FormContainer";

const deleteActionMap = {
  subject: deleteSubject,
  class: deleteClass,
  teacher: deleteTeacher,
  student: deleteStudent,
  exam: deleteSubject,
  parent: deleteSubject,
  lesson: deleteSubject,
  assignment: deleteSubject,
  result: deleteSubject,
  attendance: deleteSubject,
  event: deleteSubject,
  announcement: deleteSubject,
};

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
  [key: string]: (
    setOpen: Dispatch<SetStateAction<boolean>>,
    type: "create" | "update",
    data?: any,
    relatedData?: any
  ) => JSX.Element;
} = {
  teacher: (setOpen, type, data, relatedData) => (
    <TeacherForm
      type={type}
      data={data}
      table="teacher"
      setOpen={setOpen}
      relatedData={relatedData}
    />
  ),
  student: (setOpen, type, data, relatedData) => (
    <StudentForm
      type={type}
      data={data}
      table="student"
      setOpen={setOpen}
      relatedData={relatedData}
    />
  ),
  // parent: (type, data) => <ParentForm type={type} data={data} table="parent" />,
  subject: (setOpen, type, data, relatedData) => (
    <SubjectForm
      type={type}
      data={data}
      table="subject"
      setOpen={setOpen}
      relatedData={relatedData}
    />
  ),
  class: (setOpen, type, data, relatedData) => (
    <ClassesForm
      type={type}
      data={data}
      table="class"
      setOpen={setOpen}
      relatedData={relatedData}
    />
  ),
  // lesson: (type, data) => <LessonForm type={type} data={data} table="lesson" />,
  exam: (setOpen, type, data, relatedData) => (
    <ExamForm
      type={type}
      data={data}
      table="class"
      setOpen={setOpen}
      relatedData={relatedData}
    />
  ),
  // assignment: (type, data) => (
  //   <AssignmentForm type={type} data={data} table="assignment" />
  // ),
  // result: (type, data) => <ResultForm type={type} data={data} table="result" />,
  // event: (type, data) => <EventForm type={type} data={data} table="event" />,
  // announcement: (type, data) => (
  //   <AnnouncementForm type={type} data={data} table="announcement" />
  // ),
};

const FormModal = ({
  table,
  type,
  data,
  id,
  relatedData,
}: FormContainerProps & { relatedData?: any }) => {
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
    const [state, formAction] = useFormState(deleteActionMap[table], {
      success: false,
      error: false,
    });

    const router = useRouter();

    useEffect(() => {
      if (state.success) {
        toast(`${table} deleted successfully!`);

        router.refresh();
      }
    }, [state, router]);
    return type === "delete" && id ? (
      <form action={formAction} className="p-4 flex flex-col gap-4">
        <input type="text | number" name="id" value={id} hidden />
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](setOpen, type, data, relatedData)
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
              className="absolute top-1.5 right-3 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src={"/close.png"} alt={""} height={18} width={18} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
