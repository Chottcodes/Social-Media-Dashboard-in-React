import React from "react";

const OverviewCardComponent = ({
  OverviewText,
  PlatformIcon,
  OverviewGrowthIcon,
  OverviewNumber,
  OverviewPercent,
  textStyle,
  isDarkMode,
}) => {
  return (
    <div
      className={`${
        isDarkMode
          ? "bg-[#f5f7ff] hover:bg-[#c6cada]"
          : "bg-[#252a41] hover:bg-[#373f61]"
      } h-[180px] w-[100%] lg:w-[100%] lg:h-[145px] rounded-2xl cursor-pointer`}
    >
      <div className="flex justify-between items-center h-[30%] w-[80%] m-auto mt-5 font-['Inter-Regular']">
        <h1 className="text-[#8b97c6] text-[20px]">{OverviewText}</h1>
        <img className="h-[50%]" src={PlatformIcon} alt="Social Media Icon" />
      </div>
      <div className="w-[80%] h-[50%] m-auto flex justify-between items-center font-['Inter-Regular']">
        <div className="w-[50%]">
          <h1
            className={`${
              isDarkMode ? "text-black" : "text-white"
            } text-[45px] font-[Inter-Bold]`}
          >
            {OverviewNumber}
          </h1>
        </div>
        <div className="w-[50%] flex justify-end items-center gap-1">
          <img className="h-2" src={OverviewGrowthIcon} alt="icon" />
          <p className={`${textStyle}`}>{OverviewPercent}</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCardComponent;
