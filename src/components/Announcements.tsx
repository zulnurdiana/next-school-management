const Announcements = () => {
  return (
    <div className="bg-white rounded-md p-4">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-3">
        <div className="bg-lamaSkyLight rounded-md p-4 ">
          <div className="flex justify-between items-center ">
            <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
            <span className="bg-white px-1 py-1 text-sm rounded-md text-gray-400">
              2025-01-01
            </span>
          </div>
          <p className="text-sm mt-1 text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipi elit. Aliquam, fugiat!
          </p>
        </div>
        <div className="bg-lamaPurpleLight rounded-md p-4 ">
          <div className="flex justify-between items-center ">
            <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
            <span className="bg-white px-1 py-1 text-sm rounded-md text-gray-400">
              2025-01-01
            </span>
          </div>
          <p className="text-sm mt-1 text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipi elit. Aliquam, fugiat!
          </p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4 ">
          <div className="flex justify-between items-center ">
            <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
            <span className="bg-white px-1 py-1 text-sm rounded-md text-gray-400">
              2025-01-01
            </span>
          </div>
          <p className="text-sm mt-1 text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipi elit. Aliquam, fugiat!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
