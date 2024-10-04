import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="hidden md:flex items-center gap-2 rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src={"/search.png"} alt="" height={20} width={20} />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none w-[200px] p-2 bg-transparent"
        />
      </div>

      <div className="flex items-center gap-7 justify-end w-full">
        <div className="rounded-full w-7 h-7 cursor-pointer flex items-center justify-center bg-white">
          <Image src={"/message.png"} alt="" height={20} width={20} />
        </div>
        <div className="relative rounded-full w-8 h-8 cursor-pointer flex items-center justify-center bg-white">
          <Image src={"/announcement.png"} alt="" height={20} width={20} />
          <span className="absolute -top-2 -right-2 bg-purple-500 text-xs w-5 h-5 text-white rounded-full flex items-center justify-center">
            1
          </span>
        </div>
        <div className="flex flex-col">
          <span className="leading-3 font-bold">John Doe</span>
          <span className="text-[15px] text-end text-gray-500">Admin</span>
        </div>
        <div>
          <Image
            src={"/avatar.png"}
            alt=""
            height={36}
            width={36}
            className="rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
