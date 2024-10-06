import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* LEFT */}
      <div className="w-full md:w-2/3 flex flex-col gap-4">
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>

        {/* CHART */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* ATTENDENCE CHART */}
          <div className="w-full lg:w-2/3  h-[450px]">
            <AttendanceChart />
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full md:w-1/3">R</div>
    </div>
  );
};

export default AdminPage;
