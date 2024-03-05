import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { calculateHeightForFabric } from "../util/temporaryDB";

export const SideList = () => {
  const { printFile, loading } = useSelector((state) => state.printFile);
  const [date, setDate] = useState(0);

  return (
    <div className="flex m-2 w-[870px] ml-8">
      {/* ---------------------------------------Side Fabrick--------------------------------------------- */}
      <div className="flex flex-col">
        {loading && printFile.map((item, key) => (
          <button
                key={key}
                className="flex items-center justify-center h-[120px] w-[30px] rounded-lg bg-[#ACCF49] mt-2"
                onClick={() => setDate(key)}
              >
                <p className="rotate-90 whitespace-nowrap leading-6 font-bold">
                  {item.folderFabric}
                </p>
              </button>
        ))}
      </div>
      {/* --------------------------------------------------------------------------------------------- */}
      <div className="flex flex-col m-2 w-[820px] border-2 border-[#D9DCE4] rounded-lg">
        <div className="my-2 mx-auto rounded-lg h-[48px] w-[95%]  bg-[#0E0874]">
          <p className="text-white m-3">FILES</p>
        </div>
            {loading && printFile[date].folderDate.map((i, iKey) => (
              <div key={iKey}>
              <div className="my-2 mx-auto rounded-lg h-[33px] w-[95%] bg-[#D1CEFF]">
              <p className="text-[#0E0874] text-center m-auto">
                {i.date}
              </p>
            </div>
                {i.item.map((y, yKey) => (
                  <div key={yKey} className="flex mx-auto rounded-lg h-[33px] w-[90%] justify-between">
                    <p className="text-[#0E0874]">{y.fileName}</p>
                    <div className="flex flex-row">
                      <button className="mx-2 bg-[#FF3D00] h-[20px] w-[20px] outline-[#FF3D00] outline outline-offset-2 outline-2 rounded-md hover:bg-[#D9DCE4] hover:outline-[#D9DCE4]"></button>
                      <button className="mx-2 bg-[#FF3D00] h-[20px] w-[20px] outline-[#FF3D00] outline outline-offset-2 outline-2 rounded-md"></button>
                      <button className="mx-2 bg-[#FF3D00] h-[20px] w-[20px] outline-[#FF3D00] outline outline-offset-2 outline-2 rounded-md"></button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
      </div>
    </div>
  );
};
