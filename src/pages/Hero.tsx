import { useState } from "react";
import SetBellIcon from "../components/layout/SetBellIcon";
import SetLogo from "../components/layout/SetLogo";
import SetProfile from "../components/layout/SetProfile";
import SideBar from "../components/layout/SideBar";
import CategoryNutton from "../components/notes/CategoryNutton";
import { tabs } from "../data/initialCategory";
import Cards from "../components/notes/Cards";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className=" min-h-screen w-full flex flex-col">

      <div className="flex  items-center justify-evenly px-10 py-5">
        <SetLogo />
        <SideBar />
        <SetBellIcon />
        <SetProfile />
      </div>

      <div className="ml-10 mt-2 flex flex-col items-start justify-center">
        <p className="text-[50px] font-extrabold text-white">Good Morning!</p>
        <p className="text-[20px] mt-1 text-[var(--muted)]">
          6 tasks left out of 10
        </p>
      </div>

      <div className="ml-10 mt-5 flex flex-wrap items-center justify-start gap-2.5">
        {tabs.map((tab) => {
          return (
            <CategoryNutton
              tab={tab}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          );
        })}
      </div>

      <div className="ml-2 mt-5 flex flex-wrap items-center justify-start gap-2.5">
       <Cards/>
      </div>

    </div>
  );
};

export default Hero;
