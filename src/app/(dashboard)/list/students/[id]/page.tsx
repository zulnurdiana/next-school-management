import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleStudentPage = () => {
  return (
    <div className="flex-1 flex flex-col xl:flex-row gap-4 p-4">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* PROFILE CARD  */}
          <div className="flex bg-lamaSky rounded-md px-4 flex-1 py-6 gap-4">
            <div className="w-1/3 flex justify-center">
              <Image
                src={
                  "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                }
                alt=""
                width={144}
                height={144}
                className="rounded-full object-cover w-32 h-32"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between  gap-4">
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-semibold">John Doe</h1>
                <FormModal
                  table="student"
                  type="update"
                  data={{
                    id: 1,
                    username: "deanguerrero",
                    email: "deanguerrero@gmail.com",
                    password: "password",
                    firstName: "Dean",
                    lastName: "Guerrero",
                    phone: "+1 234 567 89",
                    address: "1234 Main St, Anytown, USA",
                    bloodType: "A+",
                    dateOfBirth: "2000-01-01",
                    sex: "male",
                    img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                  }}
                />
              </div>

              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                velit?
              </p>
              <div className="flex  gap-4 flex-col xl:flex-row flex-wrap justify-between text-xs font-medium">
                <div className="flex items-center gap-2 w-full lg:w-full md:w-1/3 2xl:w-1/3">
                  <Image src={"/blood.png"} alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="flex items-center gap-2 w-full lg:w-full md:w-1/3 2xl:w-1/3">
                  <Image src={"/date.png"} alt="" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="flex items-center gap-2 w-full lg:w-full md:w-1/3 2xl:w-1/3">
                  <Image src={"/mail.png"} alt="" width={14} height={14} />
                  <span>john@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 w-full lg:w-full md:w-1/3 2xl:w-1/3">
                  <Image src={"/phone.png"} alt="" width={14} height={14} />
                  <span>+1 234 567</span>
                </div>
              </div>
            </div>
          </div>

          {/* SMALL CARD */}
          <div className="flex flex-1 gap-4 justify-between flex-wrap ">
            {/* CARD */}
            <div className="bg-white w-full flex rounded-md p-4 gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[47%] ">
              <Image
                src={"/singleAttendance.png"}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">9</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white w-full flex rounded-md p-4 gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[47%] ">
              <Image
                src={"/singleBranch.png"}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">6th</h1>
                <span className="text-sm text-gray-400">Grade</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white w-full flex rounded-md p-4 gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[47%] ">
              <Image
                src={"/singleLesson.png"}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">18</h1>
                <span className="text-sm text-gray-400">Lesson</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white w-full flex rounded-md p-4 gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[47%] ">
              <Image
                src={"/singleClass.png"}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="bg-white h-[800px] mt-4 rounded-md p-4">
          <h1 className="text-xl font-semibold">Student&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        {/* SHORTCUT */}
        <div className="bg-white rounded-md p-4 ">
          <h1 className="text-xl font-semibold mb-2">Shorcuts</h1>
          <div className="flex gap-2 flex-wrap  text-gray-400 text-xs">
            <Link
              className="rounded-md px-1 py-2 bg-lamaSkyLight"
              href={`/list/lessons/?classId=${2}`}
            >
              Student&apos;s Lessons
            </Link>
            <Link
              className="rounded-md px-1 py-2 bg-lamaYellowLight"
              href={`/list/teachers/?classId=${2}`}
            >
              Student&apos;s Teachers
            </Link>
            <Link
              className="rounded-md px-1 py-2 bg-lamaPurpleLight"
              href={`/list/exams/?studentId=${2}`}
            >
              Student&apos;s Exams
            </Link>
            <Link
              className="rounded-md px-1 py-2 bg-pink-50"
              href={`/list/assignments/?classId=${2}`}
            >
              Student&apos;s Assignments
            </Link>
            <Link
              className="rounded-md px-1 py-2 bg-lamaYellowLight"
              href={`/list/results/?classId=${2}`}
            >
              Student&apos;s Results
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleStudentPage;
