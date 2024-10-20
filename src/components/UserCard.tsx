import prisma from "@/lib/prisma";
import Image from "next/image";

const UserCard = async ({
  type,
}: {
  type: "admin" | "student" | "parent" | "teacher";
}) => {
  const queryRole: Record<typeof type, any> = {
    admin: prisma.admin,
    student: prisma.student,
    parent: prisma.parent,
    teacher: prisma.teacher,
  };

  const data = await queryRole[type].count();
  return (
    <div className="rounded-2xl min-w-[120px] odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1">
      <div className="flex justify-between items-center">
        <span className="bg-white rounded-full text-[10px] text-green-500 px-2 py-1">
          2024/25
        </span>
        <Image
          src={"/more.png"}
          alt=""
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
      <h1 className="text-2xl font-semibold my-4">{data}</h1>
      <h2 className="text-gray-500 font-medium text-xs">
        <span className="capitalize">{type}</span>s
      </h2>
    </div>
  );
};

export default UserCard;
