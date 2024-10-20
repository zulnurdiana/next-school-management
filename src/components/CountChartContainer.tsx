import Image from "next/image";
import CountChart from "./CountChart";
import prisma from "@/lib/prisma";

const CountChartContainer = async () => {
  const data = await prisma.student.groupBy({
    by: ["sex"],
    _count: true,
  });

  const boys = data.find((d) => d.sex === "MALE")?._count || 0;
  const girls = data.find((d) => d.sex === "FEMALE")?._count || 0;

  return (
    <div className=" bg-white rounded-xl p-4 w-full h-full">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image
          src={"/moreDark.png"}
          width={20}
          height={20}
          alt=""
          className="cursor-pointer"
        />
      </div>
      {/* MIDDLE CHART */}
      <div className="relative w-full h-[75%]">
        <CountChart boys={boys} girls={girls} />
        {/* BOTTOM */}
        <div className="flex justify-center gap-16">
          <div className="flex flex-col gap-1">
            <div className="w-5 h-5 rounded-full bg-lamaSky" />
            <h1>{boys}</h1>
            <h2 className="text-xs text-gray-300">
              Boys ({Math.round((boys / (boys + girls)) * 100)}%)
            </h2>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-5 h-5 rounded-full bg-lamaYellow" />
            <h1>{girls}</h1>
            <h2 className="text-xs text-gray-300">
              Girls ({Math.round((girls / (boys + girls)) * 100)}%)
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountChartContainer;
