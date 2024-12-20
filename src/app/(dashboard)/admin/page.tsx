import Announcements from "@/components/Announcements";
import AttendanceChartContainer from "@/components/AttendanceChartContainer";
import CountChartContainer from "@/components/CountChartContainer";
import EventCalendar from "@/components/EventCalendar";
import EventCalendarContainer from "@/components/EventCalendarContainer";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* LEFT */}
      <div className="w-full md:w-2/3 flex flex-col gap-4">
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <UserCard type="admin" />
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
        </div>

        {/* CHART */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChartContainer />
          </div>
          {/* ATTENDENCE CHART */}
          <div className="w-full lg:w-2/3  h-[450px]">
            <AttendanceChartContainer />
          </div>
        </div>

        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full md:w-1/3 flex flex-col gap-8">
        <EventCalendarContainer searchParams={searchParams} />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
