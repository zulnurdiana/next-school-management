import React from "react";
import BigCalendar from "./BigCalendar";
import prisma from "@/lib/prisma";
import { adjustScheduleToCurrentWeek } from "@/lib/utils";

const BigCalendarContainer = async ({
  type,
  id,
}: {
  type: "teacherId" | "classId";
  id: string | number;
}) => {
  const dataRes = await prisma.lesson.findMany({
    where: {
      ...(type === "teacherId"
        ? { teacherId: id as string }
        : { classId: id as number }),
    },
  });

  const data = dataRes.map((item) => ({
    title: item.name,
    start: item.startTime,
    end: item.endTime,
  }));

  const schedule = adjustScheduleToCurrentWeek(data);

  return (
    <div>
      <BigCalendar data={schedule} />
    </div>
  );
};

export default BigCalendarContainer;
