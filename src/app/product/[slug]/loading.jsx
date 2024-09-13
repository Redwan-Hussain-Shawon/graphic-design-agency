import React from "react";

function loading() {
  return (
    <div className="py-12 px-4 container">
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-8">
        <div className="h-[500px] w-full rounded-lg bg-gray-200 animate-pulse"></div>
        <div className="">
          <div className="w-[80%] h-9 bg-gray-200 animate-pulse rounded-sm"> </div>
          <div className="mt-3 flex items-center gap-3">
          <div className="w-16 h-6  bg-gray-200 animate-pulse rounded-sm"> </div>
          <div className="w-16 h-6  bg-gray-200 animate-pulse rounded-sm"> </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
          <div className="w-24 h-7  bg-gray-200 animate-pulse rounded-sm"> </div>
          <div className="w-24 h-7  bg-gray-200 animate-pulse rounded-sm"> </div>
          </div>
          <div className="w-[40%] h-5 mt-4 bg-gray-200 animate-pulse rounded-sm"> </div>
          <div className="w-[60%] h-5 mt-2 bg-gray-200 animate-pulse rounded-sm"> </div>
        </div>
      </div>
    </div>
  );
}

export default loading;
