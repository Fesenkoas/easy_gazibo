import React from "react";
import { LineChart } from "./LineChart";

export const ListView = () => {
  return (
    <div className="flex  absolute bottom-0 top-14 inset-x-0">
      {/* -------------------------------------Left---------------------------------------------------- */}
      <div className="flex m-2 w-[870px] ml-8">
        <div className="flex flex-col">
          <div className="flex items-center justify-center h-[120px] w-[30px] rounded-lg bg-[#ACCF49] mt-2">
            <p className="rotate-90 whitespace-nowrap leading-6 font-bold">
              Ткань
            </p>
          </div>
          <div className="flex items-center justify-center h-[120px] w-[30px] rounded-lg bg-[#ACCF49] mt-2">
            <p className="rotate-90 whitespace-nowrap leading-6 font-bold">
              Ткань
            </p>
          </div>
          <div className="flex items-center justify-center h-[120px] w-[30px] rounded-lg bg-[#ACCF49] mt-2">
            <p className="rotate-90 whitespace-nowrap leading-6 font-bold">
              Ткань
            </p>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------------------- */}
        <div className="flex flex-col m-2 w-[820px] border-2 border-[#D9DCE4] rounded-lg">
          <div className="my-2 mx-auto rounded-lg h-[48px] w-[95%]  bg-[#0E0874]">
            <p className="text-white m-3">FILES</p>
          </div>
          <div className="my-2 mx-auto  rounded-lg h-[33px] w-[95%]  bg-[#D1CEFF]">
            <p className="text-[#0E0874] text-center m-auto">03.03.2024</p>
          </div>
          <div className="flex mx-auto  rounded-lg h-[33px] w-[90%] justify-between">
            <p className="text-[#0E0874]">1 Mapa 180 320x335cm X4</p>
            <div className="flex flex-row">
              <button className="mx-2 bg-[#FF3D00] h-[20px] w-[20px] outline-[#FF3D00] outline outline-offset-2 outline-2 rounded-md hover:bg-[#D9DCE4] hover:outline-[#D9DCE4]"></button>
              <button className="mx-2 bg-[#FF3D00] h-[20px] w-[20px] outline-[#FF3D00] outline outline-offset-2 outline-2 rounded-md"></button>
              <button className="mx-2 bg-[#FF3D00] h-[20px] w-[20px] outline-[#FF3D00] outline outline-offset-2 outline-2 rounded-md"></button>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------------------- */}
      {/* -------------------------------------Right--------------------------------------------------- */}
      <div className=" flex flex-wrap justify-center  m-3 w-[870px]">
        <div className="m-1 rounded-lg h-[168px] w-[280px] border-2 border-[#D9DCE4]">
          <div className="rounded-lg h-[48px] w-auto m-2 bg-[#ACCF49]">
            <p className="text-[#0E0874] text-center p-3">DAY</p>
          </div>
          <p className="text-[#0E0874] text-center pt-7">fdgfgf</p>
        </div>
        <div className="m-1 rounded-lg h-[168px] w-[280px] border-2 border-[#D9DCE4]">
          <div className="rounded-lg h-[48px] w-auto m-2 bg-[#ACCF49]">
            <p className="text-[#0E0874] text-center  p-3">WEEK</p>
          </div>
          <p className="text-[#0E0874] text-center pt-7">fdgfgf</p>
        </div>
        <div className="m-1 rounded-lg h-[168px] w-[280px] border-2 border-[#D9DCE4]">
          <div className="rounded-lg h-[48px] w-auto m-2 bg-[#ACCF49]">
            <p className="text-[#0E0874] text-center p-3">MOUNT</p>
          </div>
          <p className="text-[#0E0874] text-center pt-7">fdgfgf</p>
        </div>
        <div className=" mx-auto rounded-lg h-[48px] w-[900px]  bg-[#0E0874]">
            <p className="text-white text-center p-3">WE HAVE 12 ROLLS</p>
          </div>
        <div className="my-2 rounded-lg h-[500px] w-[900px] border-2 border-[#D9DCE4]">
          <div className="rounded-lg h-[48px] w-auto m-2 bg-[#ACCF49]">
            <p className="text-[#0E0874] text-center p-3">ALL TIME</p>
          </div>
          <LineChart/>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------------------- */}
    </div>
  );
};
