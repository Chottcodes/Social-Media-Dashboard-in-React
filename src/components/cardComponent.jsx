import React from "react";

const CardComponent = ({borderclass,platformIcon,profileName,Followers,profilecurrentgrowthIcon,profilecurrentgrowth,profilecurrentgrowthstyle,isDarkMode}) => {
  return (
    <div className={` ${isDarkMode ? 'bg-[#f5f7ff] hover:bg-[#c6cada]' : 'bg-[#252a41] hover:bg-[#373f61]'} h-[250px] w-[90%] rounded-2xl overflow-hidden cursor-pointer`}>
      <div className={borderclass}></div>
      <div className="w-full h-[20%]  flex justify-center items-center gap-4">
        <img className="h-7" src={platformIcon} alt="icon" />
        <p className={`${isDarkMode ? "text-[#1e202a]" : "text-[#8b97c6]"} font-['Inter-Regular']`}>{profileName}</p>
      </div>
      <div className=" h-[50%] flex flex-col justify-center items-center">
        <h1 className={`${isDarkMode ? "text-[#1e202a]" : "text-white"} text-[50px] font-['Inter-Bold']`}>{Followers}</h1>
        <p className="text-[#8b97c6] font-['Inter-Regular'] text-[20px]">Followers</p>
      </div>
      <div className=" h-[25%] gap-2 flex justify-center items-center">
        <img className="h-1" src={profilecurrentgrowthIcon} alt="icon" />
        <p className={`${profilecurrentgrowthstyle} font-['Inter-Regular']`}>{profilecurrentgrowth} Today</p>
      </div>
    </div>
  );
};

export default CardComponent;
