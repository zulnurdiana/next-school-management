"use client";
import Image from "next/image";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 103,
    fill: "white",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#FAE27C",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#C3EBFA",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const CountChart = () => {
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
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src={"/maleFemale.png"}
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 rounded-full bg-lamaSky" />
          <h1>1,234</h1>
          <h2 className="text-xs text-gray-300">Boys (50%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 rounded-full bg-lamaYellow" />
          <h1>1,234</h1>
          <h2 className="text-xs text-gray-300">Girls (50%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
