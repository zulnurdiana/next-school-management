import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import React from "react";

const ParentPage = () => {
  return (
    <div className="flex-1 flex p-4 gap-4 flex-col lg:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white rounded-md p-4">
          <h1 className="text-xl font-semibold">Schedule (John Doe)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full md:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
};

export default ParentPage;
