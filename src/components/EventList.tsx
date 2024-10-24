import prisma from "@/lib/prisma";
import React from "react";

const EventList = async ({ date }: { date: string | undefined }) => {
  const newDate = date ? new Date(date) : new Date();

  // Set start and end of the day
  const startOfDay = new Date(newDate.setHours(0, 0, 0, 0));
  const endOfDay = new Date(newDate.setHours(23, 59, 59, 999));

  // Query with the correct time range
  const data = await prisma.event.findMany({
    where: {
      startTime: {
        gte: startOfDay, // greater than or equal to start of the day
        lte: endOfDay, // less than or equal to end of the day
      },
    },
  });

  return data.map((event) => (
    <div
      className="border-2 rounded-md border-t-4 border-gray-100 p-4 odd:border-t-lamaSky even:border-t-lamaPurple"
      key={event.id}
    >
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-gray-500">{event.title}</h1>
        <span className="text-xs text-gray-300">
          {event.startTime.toLocaleString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </span>
      </div>
      <p className="mt-2 text-xs text-gray-400">{event.description}</p>
    </div>
  ));
};

export default EventList;
