import React from "react";

const DashboardSearch = () => {
  return (
    <div className="bg-white shadow-sdprimary p-2 w-full  flex items-center rounded-full">
      <div className="flex-1 px-5">
        <input
          type="text"
          placeholder="Do fundrise now"
          className="bg-transparent text-sm placeholder:text-text40 text-text1 w-full"
        />
      </div>
      <button className="w-[72px] h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  );
};

export default DashboardSearch;
