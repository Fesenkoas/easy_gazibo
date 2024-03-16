import React from "react";
import { LineChart } from "./LineChart";
import { useSelector } from "react-redux";


export const SideStatistic = () => {
  const { result, line } = useSelector((state) => state.calcFile);
  
  return (
    <div className=" flex flex-wrap justify-center m-2 h-[100%] w-1/2">
      <div className="m-1 rounded-lg h-[150px] w-[32%] border-2 border-[#D9DCE4]">
        <div className="rounded-lg h-[48px] w-auto m-2 bg-[#ACCF49]">
          <p className="text-[#0E0874] text-center p-3">DAY</p>
        </div>
        <p className="text-[#0E0874] text-center pt-7">{result.totalHeightDay}cm</p>
      </div>
      <div className="m-1 rounded-lg h-[150px] w-[32%] border-2 border-[#D9DCE4]">
        <div className="rounded-lg h-[48px] w-auto m-2 bg-[#ACCF49]">
          <p className="text-[#0E0874] text-center  p-3">WEEK</p>
        </div>
        <p className="text-[#0E0874] text-center pt-7">{result.totalHeightWeek}cm</p>
      </div>
      <div className="m-1 rounded-lg h-[150px] w-[32%] border-2 border-[#D9DCE4]">
        <div className="rounded-lg h-[48px] w-auto m-2 bg-[#ACCF49]">
          <p className="text-[#0E0874] text-center p-3">MOUNT</p>
        </div>
        <p className="text-[#0E0874] text-center pt-7">{result.totalHeightMonth}cm</p>
      </div>
      {/* <div className=" mx-auto rounded-lg h-[48px] w-[100%]  bg-[#0E0874]">
        <p className="text-white text-center p-3">WE HAVE 12 ROLLS</p>
      </div> */}
      <div className="my-2 rounded-lg h-[65%] w-[100%] border-2 border-[#D9DCE4]">
        <div className="rounded-lg h-[48px] w-auto m-2 bg-[#ACCF49]">
          <p className="text-[#0E0874] text-center p-3">ALL TIME</p>
        </div>
        
        <LineChart line={line} />
        
        
      </div>
    </div>
  );
};
