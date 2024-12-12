import React from "react";

function Sidebar() {
  return (
    <div className="h-screen py-8 w-1/5 bg-mainTheme text-white flex flex-col justify-between items-center">
      <div className="flex flex-col gap-16">
        <img
          src="/logo512.png"
          height={10000}
          width={10000}
          alt="logo"
          className="h-24 w-24 rounded-full border-2 border-yellow-300"
        />

        <div className="flex flex-col justify-center items-center gap-4">
          {["Dashboard", "Income", "Expenses", "Budget", "Reports"].map(
            (item) => {
              return (
                <div key={item} className="text-xl">
                  {item}
                </div>
              );
            }
          )}
        </div>
      </div>

      <div className="w-4/5 mx-auto border border-gray-400 rounded-lg flex justify-center gap-12 items-center">
        <img
          src="logo192.png"
          alt="profile logo"
          height={200}
          width={200}
          className="h-12 w-12 rounded-full"
        />
        <p className="text-xl font-semibold">nishan</p>
      </div>
    </div>
  );
}

export default Sidebar;
