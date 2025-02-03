import React from "react";

function Sidebar() {
  return (
    <aside className=" h-[142.5rem] md:h-[121.8rem] bg-blue-500 shadow-2xl overflow-y-auto w-[45px] md:w-full text-white  p-2 cursor-pointer  ">
      <div className=" mt-3">
        <h1 className="hidden md:block md:text-[23px]">Dashboard</h1>
        <hr className="font-bold"/>
        <ul className="  mt-3 flex flex-col gap-1.5 text-[20px]">
          <li className="hidden md:block">Sales</li>
          <li className="hidden md:block">Customer</li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
