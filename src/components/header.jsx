import React from "react";

const Header = ({ TotalFollowers, isDarkMode, onThemeToggle }) => {
  return (
    <div className="w-full h-[90%] flex flex-col justify-center items-center">
      <div className="w-[90%] lg:flex justify-center items-center">
        <div className=" w-[90%]">
          <h1 className={`${
              isDarkMode ? "text-[#1e202a]" : "text-white"
            } text-2xl font-['Inter-Bold']`}>Social Media Dashboard</h1>
          <p
            className={`${
              isDarkMode ? "text-[#1e202a]" : "text-[#8b97c6]"
            } pb-5 font-['Inter-Bold']`}
          >
            Total Followers: {TotalFollowers}
          </p>
        </div>
        <hr className="border-[#8b97c6] w-[100%] lg:hidden m-auto " />
        <div className="w-[100%] h-[40%] flex justify-between lg:justify-end lg:gap-3 items-center ">
          <p className={`${isDarkMode ? "text-[#1e202a]" : "text-[#8b97c6]"} font-['Inter-Bold']`}>
            Dark Mode
          </p>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isDarkMode}
              onChange={onThemeToggle}
            />
            <div className={`${isDarkMode ? "bg-[#aeb3cb] after:bg-white" : "bg-gradient-to-r from-[hsl(210,78%,56%)] to-[hsl(146,68%,55%)] after:bg-[#1f212e]"} relative w-11 h-6 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px]  after:rounded-full after:h-5 after:w-5 after:transition-all"}`}></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
