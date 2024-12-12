import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

function Sidebar() {
  const [selectedIndex, setSelectedIndex] = useState();
  const items = [
    { name: "Dashboard", Icon: false },
    { name: "Budget", Icon: true },
    { name: "Income", Icon: true },
    { name: "Expenses", Icon: true },
    { name: "Accounting", Icon: true },
    { name: "Reports", Icon: true },
  ];
  return (
    <div className="h-screen py-8 w-[15%] bg-mainTheme text-white flex flex-col justify-between items-center">
      <div className="flex flex-col gap-12 w-full">
        <img
          src="/logo512.png"
          height={1000}
          width={1000}
          alt="logo"
          className="h-24 w-24 rounded-full mx-auto border-2 border-yellow-300"
        />

        <div className="flex flex-col justify-center w-full items-start gap-2">
          {items.map((item, index) => {
            return (
              <div
                onClick={() => {
                  parseInt(selectedIndex) === index
                    ? setSelectedIndex("")
                    : setSelectedIndex(`${index}`);
                }}
                key={item}
                className="text-xl font-ubuntu px-12 py-1 w-full text-left flex justify-between items-center"
              >
                {item.name}
                {item.Icon &&
                  (parseInt(selectedIndex) === index ? (
                    <BiChevronUp />
                  ) : (
                    <BiChevronDown />
                  ))}
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-4/5 border border-gray-400 rounded-lg flex justify-start px-4 gap-3 items-center">
        <img
          src="logo192.png"
          alt="profile logo"
          height={200}
          width={200}
          className="h-12 w-12 rounded-full"
        />
        <div className="h-8 w-[1px] bg-white">&nbsp;</div>
        <p className="text-xl font-semibold">nishan</p>
      </div>
    </div>
  );
}

export default Sidebar;
