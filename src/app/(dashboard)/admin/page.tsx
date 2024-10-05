import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* LEFT */}
      <div className="w-full md:w-2/3">
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full md:w-1/3">R</div>
    </div>
  );
};

export default AdminPage;
