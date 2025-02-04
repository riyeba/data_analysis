import React from "react";

function Sidebar() {
  return (
    <aside className="h-[163rem] md:h-[138.5rem] bg-blue-500 shadow-2xl  w-full text-white  p-2 cursor-pointer  ">
      <div className=" mt-3">
        <h1 className="">Dashboard</h1>
        <hr className="font-bold"/>
        <ul className="">
          <li className="">Sales</li>
          <li className="">Customer</li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
