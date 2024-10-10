"use client";

import Image from "next/image";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 92, fill: "#FAE27C" },
  { name: "Group B", value: 8, fill: "#C3EBFA" },
];

const Performance = () => {
  return (
    <div className="bg-white rounded-md p-4 h-80 relative">
      <div className="w-full flex items-center justify-between mb-2 ">
        <h1 className="font-semibold text-xl">Performance</h1>
        <Image src={"/moreDark.png"} alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
        <h1 className="text-3xl font-bold">9.2</h1>
        <p className="text-xs text-gray-400">of 10.0 Max PTS</p>
      </div>
      <div className="font-medium absolute bottom-16 left-0 right-0 m-auto text-center">
        1st Semester - 2nd Semester
      </div>
    </div>
  );
};

export default Performance;
