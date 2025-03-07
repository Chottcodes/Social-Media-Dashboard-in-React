import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import CardComponent from "./components/CardComponent";
import OverviewHeader from "./components/OverviewHeader";
import OverviewCardComponent from "./components/OverviewCardComponent";
import { getData } from "./services/DataServices";

function App() {
  const [socialMediaData, setSocialMediaData] = useState({
    totalFollowers: "",
    facebook: {
      userName: "",
      followers: "",
      followersGrowth: "",
      pageViews: "",
      pageViewsGrowth: "",
      likes: "",
      likesGrowth: "",
    },
    instagram: {
      userName: "",
      followers: "",
      followersGrowth: "",
      likes: "",
      likesGrowth: "",
      profileViews: "",
      profileViewsGrowth: "",
    },
    twitter: {
      userName: "",
      followers: "",
      followersGrowth: "",
      retweets: "",
      retweetsGrowth: "",
      likes: "",
      likeGrowth: "",
    },
    youtube: {
      userName: "",
      subscribers: "",
      subscribersGrowth: "",
      likes: "",
      likesGrowth: "",
      totalViews: "",
      totalViewsGrowth: "",
    },
  });
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const socialMediaData = async () => {
      const data = await getData();
      const { totalFollowers, facebook, instagram, twitter, youtube } = data[0];
      console.log(facebook.likes)
      setSocialMediaData({
        totalFollowers: {
          totalFollowers: totalFollowers.totalFollowers,
        },
        facebook: {
          userName: facebook.userName,
          followers: facebook.followers,
          followersGrowth: facebook.followersGrowth,
          pageViews: facebook.pageViews,
          pageViewsGrowth: facebook.pageViewsGrowth,
          likes: facebook.likes,
          likesGrowth: facebook.likesGrowth
        },
        instagram: {
          userName: instagram.userName,
          followers: instagram.followers,
          followersGrowth: instagram.followersGrowth,
          likes: instagram.likes,
          likesGrowth: instagram.likesGrowth,
          profileViews: instagram.profileViews,
          profileViewsGrowth: instagram.profileViewsGrowth,
        },
        twitter: {
          userName: twitter.userName,
          followers: twitter.followers,
          followersGrowth: twitter.followersGrowth,
          retweets: twitter.retweets,
          retweetsGrowth: twitter.retweetsGrowth,
          likes: twitter.likes,
          likeGrowth: twitter.likeGrowth,
        },
        youtube: {
          userName: youtube.userName,
          subscribers: youtube.subscribers,
          subscribersGrowth: youtube.subscribersGrowth,
          likes: youtube.likes,
          likesGrowth: youtube.likesGrowth,
          totalViews: youtube.totalViews,
          totalViewsGrowth: youtube.totalViewsGrowth,
        },
      });

    };
    socialMediaData();
    console.log(isDarkMode)
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <>
      <div className="h-[1220px] lg:h-[390px]">
        <div className={` ${isDarkMode ? 'bg-[#ffffff]' : 'bg-[#1f212e]'}  w-full lg:flex-row pb-5 rounded-b-2xl h-[200px]`}>
          <Header
            TotalFollowers={` ${socialMediaData.totalFollowers.totalFollowers}`}
            isDarkMode={isDarkMode}
            onThemeToggle={handleThemeToggle}
          />
          <div className="w-[100%] flex flex-col lg:w-[90%] lg:m-auto lg:flex-row justify-center items-center gap-4 transition-all duration-300 ">
            <CardComponent
              borderclass={"bg-[#198ff5] w-full h-[3%]"}
              platformIcon={"/assets/icon-facebook.svg"}
              profileName={socialMediaData.facebook.userName}
              Followers={socialMediaData.facebook.followers}
              profilecurrentgrowthIcon={"/assets/icon-up.svg"}
              profilecurrentgrowth={socialMediaData.facebook.followersGrowth}
              profilecurrentgrowthstyle={`text-white lg:text-[#1db489] ${isDarkMode ? "text-[#1db489]" : "text-[#8b97c6]"}`}
              isDarkMode={isDarkMode}
            />
            <CardComponent
              borderclass={"bg-[#1ca0f2] w-full h-[3%]"}
              platformIcon={"/assets/icon-twitter.svg"}
              profileName={socialMediaData.twitter.userName}
              Followers={socialMediaData.twitter.followers}
              profilecurrentgrowthIcon={"/assets/icon-up.svg"}
              profilecurrentgrowth={socialMediaData.twitter.followersGrowth}
              profilecurrentgrowthstyle={`text-white lg:text-[#1db489] ${isDarkMode ? "text-[#1db489]" : "text-[#1db489]"}`}
              isDarkMode={isDarkMode}
            />
            <CardComponent
              borderclass={
                "bg-gradient-to-r from-[hsl(37,_97%,_70%)] to-[hsl(329,_70%,_58%)] w-full h-[3%]"
              }
              platformIcon={"/assets/icon-instagram.svg"}
              profileName={socialMediaData.instagram.userName}
              Followers={socialMediaData.instagram.followers}
              profilecurrentgrowthIcon={"/assets/icon-up.svg"}
              profilecurrentgrowth={socialMediaData.instagram.followersGrowth}
              profilecurrentgrowthstyle={`text-white lg:text-[#1db489] ${isDarkMode ? "text-[#1db489]" : "text-[#1db489]"}`}
              isDarkMode={isDarkMode}
             
            />
            <CardComponent
              borderclass={"bg-[#c4032a] w-full h-[3%]"}
              platformIcon={"/assets/icon-youtube.svg"}
              profileName={socialMediaData.youtube.userName}
              Followers={socialMediaData.youtube.subscribers}
              profilecurrentgrowthIcon={"/assets/icon-down.svg"}
              profilecurrentgrowth={socialMediaData.youtube.subscribersGrowth}
              // profilecurrentgrowthstyle={"text-[#dc414c]"}
              profilecurrentgrowthstyle={`text-white lg:text-[#1db489] ${isDarkMode ? "text-[#1db489]" : "text-[#1db489]"}`}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full lg:w-[90%] lg:flex lg:justify-start pt-10 pb-10 lg:pb-5 m-auto">
          <OverviewHeader />
        </div>
        <div className="w-[90%] lg:h-[40%] grid grid-rows-8 grid-cols-1 lg:grid-rows-2 lg:grid-cols-4 m-auto gap-4 justify-center items-center pb-5">
          <OverviewCardComponent
            OverviewText="Page Views"
            PlatformIcon={"/assets/icon-facebook.svg"}
            OverviewNumber={socialMediaData.facebook.pageViews}
            OverviewGrowthIcon={"/assets/icon-up.svg"}
            OverviewPercent={`${socialMediaData.facebook.pageViewsGrowth}%`}
            textStyle={"text-[#1db489]"}
          />
          
          <OverviewCardComponent
            OverviewText="Likes"
            PlatformIcon={"/assets/icon-facebook.svg"}
            OverviewNumber={socialMediaData.facebook.likes}
            OverviewGrowthIcon={"/assets/icon-down.svg"}
            OverviewPercent={`${socialMediaData.facebook.likesGrowth}%`}
            textStyle={"text-[#dc414c]"}
          />
          <OverviewCardComponent 
          OverviewText="Likes"
          PlatformIcon={"/assets/icon-instagram.svg"}
          OverviewNumber={socialMediaData.instagram.likes}
          OverviewGrowthIcon={"/assets/icon-up.svg"}
          OverviewPercent={`${socialMediaData.instagram.likesGrowth}%`}
          textStyle={"text-[#1db489]"}
          
          />
          <OverviewCardComponent 
          OverviewText="Profile Views"
          PlatformIcon={"/assets/icon-instagram.svg"}
          OverviewNumber={socialMediaData.instagram.profileViews}
          OverviewGrowthIcon={"/assets/icon-up.svg"}
          OverviewPercent={`${socialMediaData.instagram.profileViewsGrowth}%`}
          textStyle={"text-[#1db489]"}
          />
          <OverviewCardComponent 
          OverviewText="Retweets"
          PlatformIcon={"/assets/icon-twitter.svg"}
          OverviewNumber={socialMediaData.twitter.retweets}
          OverviewGrowthIcon={"/assets/icon-up.svg"}
          OverviewPercent={`${socialMediaData.twitter.retweetsGrowth}%`}
          textStyle={"text-[#1db489]"}
          
          />
          <OverviewCardComponent 
          OverviewText="Likes"
          PlatformIcon={"/assets/icon-twitter.svg"}
          OverviewNumber={socialMediaData.twitter.likes}
          OverviewGrowthIcon={"/assets/icon-up.svg"}
          OverviewPercent={`${socialMediaData.twitter.likeGrowth}%`}
          textStyle={"text-[#1db489]"}
          
          />
          <OverviewCardComponent
          OverviewText="Likes"
          PlatformIcon={"/assets/icon-youtube.svg"}
          OverviewNumber={socialMediaData.youtube.likes}
          OverviewGrowthIcon={"/assets/icon-down.svg"}
          OverviewPercent={`${socialMediaData.youtube.likesGrowth}%`}
          textStyle={"text-[#dc414c]"}
          />
          <OverviewCardComponent
          OverviewText="Total Views"
          PlatformIcon={"/assets/icon-youtube.svg"}
          OverviewNumber={socialMediaData.youtube.totalViews}
          OverviewGrowthIcon={"/assets/icon-down.svg"}
          OverviewPercent={`${socialMediaData.youtube.totalViewsGrowth}%`}
          textStyle={"text-[#dc414c]"}
          />
        </div>
      </div>
    </>
  );
}

export default App;
