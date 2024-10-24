import Image from "next/image";
import React from "react";
import Calendar from "react-calendar";
import EventList from "./EventList";
import EventCalendar from "./EventCalendar";

const EventCalendarContainer = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { date } = searchParams;
  return (
    <div className="bg-white p-4 rounded-md ">
      <EventCalendar />

      <div className="flex items-center justify-between my-2">
        <h1 className="text-lg font-semibold ">Events</h1>
        <Image src={"/moreDark.png"} alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        <EventList date={date} />
      </div>
    </div>
  );
};

export default EventCalendarContainer;
