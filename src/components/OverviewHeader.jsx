import React from "react";

const OverviewHeader = ({ isDarkMode }) => {
  return (
    <div>
      <h1
        className={`${
          isDarkMode ? "text-[#63687e]" : "text-white"
        } pl-6 lg:pl-0 text-2xl font-['Inter-Bold']`}
      >
        Overview - Today
      </h1>
    </div>
  );
};

export default OverviewHeader;
