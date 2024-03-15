import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPrintFileFetch } from "../features/action/fetchPrint";
import { print } from "../util/icon";
import { signal } from "../util/temporaryDB";
import { baseURL } from "./../util/Constant";
import { putStopPrintFileFetch } from "../features/action/fetchDesig";

export const DesigSideList = () => {
  const { printFile, loading } = useSelector((state) => state.printFile);
  const [date, setDate] = useState(0);
  // const [change, setChange] = useState(-1);
  // const [change1, setChange1] = useState(-1);
  const dispatch = useDispatch();

  const handleClickStop = (id_0, id_1, id_2, stop) => {
    dispatch(putStopPrintFileFetch({id_0, id_1, id_2, stop}))
  };
  // const handleClickChange = (key_1, key_2) => {
  //   setChange(key_1);
  //   setChange1(key_2);
  //   console.log(key_1);
  // };
  const handleNameFabric = (key) => {
    setDate(key);
  };

  useEffect(() => {
    const socket = new WebSocket(`ws:${baseURL}`);

    socket.addEventListener("open", function (event) {
      console.log("WebSocket соединение установлено");
    });
    socket.addEventListener("message", function (event) {
      dispatch(getAllPrintFileFetch());
    });
    socket.addEventListener("close", function (event) {
      console.log("WebSocket соединение закрыто");
    });
    socket.addEventListener("error", function (event) {
      console.error("WebSocket ошибка:", event);
    });
    return () => {
      socket.close();
    };
  }, [dispatch]);
  return (
    <div className="flex absolute bottom-0 top-14 inset-x-0 m-2 w-[1000px] ml-8 ">
      {/* ---------------------------------------Side Fabrick--------------------------------------------- */}
      <div className="flex flex-col w-[140px] overflow-y-auto">
        <div>
          {loading &&
            printFile.map((item, key) => (
              <button
                key={key}
                className={
                  signal(item)
                    ? date === key
                      ? "flex flex-col items-center justify-center h-[30px] w-[120px] rounded-lg bg-[#A62800] mt-4 text-white"
                      : "flex flex-col items-center justify-center h-[30px] w-[120px] rounded-lg bg-[#FF6E40] mt-4 hover:bg-[#A62800] text-white"
                    : date === key
                    ? "flex flex-col items-center justify-center h-[30px] w-[120px] rounded-lg bg-[#739D00] mt-4 "
                    : "flex flex-col items-center justify-center h-[30px] w-[120px] rounded-lg bg-[#ACCF49] mt-4 hover:bg-[#739D00]"
                }
                onClick={() => handleNameFabric(key)}
              >
                <p className=" whitespace-nowrap leading-6 font-bold">
                  {item.folderFabric}
                </p>
              </button>
            ))}
        </div>
      </div>
      {/* --------------------------------------------------------------------------------------------- */}
      <div className="flex flex-col m-2 w-[1000px] border-2 border-[#D9DCE4] rounded-lg overflow-y-scroll">
        <div className="flex my-2 mx-auto rounded-lg h-[48px] w-[95%]  bg-[#0E0874] justify-between">
          <p className="text-white m-3">
            FILES: {loading && printFile[date].folderFabric}
          </p>
          <p className="text-white mr-2 my-auto ">{print}</p>
        </div>
        {loading &&
          printFile[date].folderDate.map((i, iKey) => (
            <div key={iKey}>
              <div className="my-2 mx-auto rounded-lg h-[35px] w-[95%] bg-[#D1CEFF]">
                <p className="text-[#0E0874] text-center">{i.date}</p>
              </div>
              {i.item.map((y, yKey) => (
                <div
                  key={yKey}
                  className={
                    y.stop
                      ? "flex m-auto rounded-lg h-[35px] w-[95%] justify-between bg-[#ff3c001e]"
                      : "flex m-auto rounded-lg h-[35px] w-[95%] justify-between hover:bg-[#d1ceff2f]"
                  }
                >
                  <p
                    className={
                      y.print || y.stop
                        ? "text-[#9E9E9E] m-1"
                        : "text-[#0E0874] m-1 "
                    }
                  >
                    {`${yKey + 1})  ${y.fileName} `}
                  </p>

                  <div className=" m-auto">
                    {/* {!change == iKey || !change1 == yKey ? (
                      <button
                        className=" bg-[#FF3D00]  w-[144px] mx-2 font-bold text-white outline-[#FF3D00] outline outline-offset-2 outline-2 rounded-md  hover:bg-[#D9DCE4] hover:outline-[#D9DCE4] "
                        onClick={() => handleClickChange(iKey, yKey)}
                      >
                        {" "}
                        Change{" "}
                      </button>
                    ) : (
                      <input />
                    )} */}
                  </div>
                  <div className="flex flex-row ">
                    <button
                      className={
                        y.stop
                          ? " bg-[#FF3D00] my-auto mx-4 w-[144px] font-bold text-white outline-[#FF3D00] outline outline-offset-2 outline-2 rounded-md  hover:bg-[#D9DCE4] hover:outline-[#D9DCE4] "
                          : "bg-[#9E9E9E] my-auto mx-4 w-[144px] font-bold text-white outline-[#9E9E9E] outline outline-offset-2 outline-2 rounded-md  hover:bg-[#D9DCE4] hover:outline-[#D9DCE4]"
                      }
                      onClick={() =>
                        handleClickStop(
                          printFile[date]._id,
                          i._id,
                          y._id,
                          y.stop
                        )
                      }
                    >
                      {y.stop ? "Print" : "Stop"}
                    </button>
                    <button
                      className={
                        y.print || y.stop
                          ? " bg-[#9E9E9E] my-auto mx-4 h-[20px] w-[20px] outline-[#9E9E9E] outline outline-offset-2 outline-2 rounded-md  hover:bg-[#D9DCE4] hover:outline-[#D9DCE4]"
                          : " bg-[#FF3D00] my-auto mx-4 h-[20px] w-[20px] outline-[#FF3D00] outline outline-offset-2 outline-2 rounded-md hover:bg-[#D9DCE4] hover:outline-[#D9DCE4]"
                      }
                    ></button>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};
// hover:scale-x-110 transform-gpu
