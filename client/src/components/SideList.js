import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPrintFileFetch,
  putUpdatePrintFileFetch,
} from "../features/action/fetchPrint";
import { print } from "../util/icon";
import { calcFabrick } from "../features/redux/calcFabricSlice";
import { signal } from "../util/temporaryDB";
import { baseURL } from "./../util/Constant";
//import { ShowItem } from "./ShowItem";


export const SideList = () => {
  const { printFile, loading } = useSelector((state) => state.printFile);
  const [isOpen, setIsOpen] = useState(null);
  const [date, setDate] = useState(0);
  // const [showItems, setShowItems] = useState(false);
  const dispatch = useDispatch();

  const handleClickPrint = (id_0, id_1, id_2) => {
    dispatch(putUpdatePrintFileFetch({ id_0, id_1, id_2 }));
  };

  const handleNameFabric = (key) => {
    setDate(key);
    dispatch(
      calcFabrick({ data: printFile, fabricName: printFile[key].folderFabric })
    );
  };

  const handleOpenList = (key) => {
    if (key !== isOpen) setIsOpen(key);
    else setIsOpen(null);
  };

  // const handleOpenImage = (ke) => {

  //   setShowItems(!showItems);
    
  // };

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
    <div className="flex m-1 h-[100%] w-1/2 ml-8">
      {/* ---------------------------------------Side Fabrick--------------------------------------------- */}
      <div className="flex flex-col w-[20%] ">
        <div>
          {loading &&
            printFile.map((item, key) => (
              <button
                key={key}
                className={
                  signal(item, key)
                    ? date === key
                      ? "flex flex-col items-center justify-center h-[30px] w-[100%] rounded-lg bg-[#A62800] mt-4 text-white"
                      : "flex flex-col items-center justify-center h-[30px] w-[100%] rounded-lg bg-[#FF6E40] mt-4 hover:bg-[#A62800] text-white"
                    : date === key
                    ? "flex flex-col items-center justify-center h-[30px] w-[100%] rounded-lg bg-[#739D00] mt-4 "
                    : "flex flex-col items-center justify-center h-[30px] w-[100%] rounded-lg bg-[#ACCF49] mt-4 hover:bg-[#739D00]"
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
      <div className="flex flex-col m-2 h-auto w-[80%] border-2 border-[#D9DCE4] rounded-lg overflow-y-scroll">
        <div className="flex my-2 mx-auto rounded-lg h-[48px] w-[95%]  bg-[#0E0874] justify-between">
          <p className="text-white m-3">
            FILES: {loading && printFile[date].folderFabric}
          </p>
          <p className="text-white mr-2 my-auto ">{print}</p>
        </div>
        {loading &&
          printFile[date].folderDate.map((i, iKey) => (
            <div key={iKey}>
              <div
                className="my-2 mx-auto rounded-lg h-[35px] w-[95%] bg-[#D1CEFF]"
                onClick={() => handleOpenList(iKey)}
              >
                <p className="text-[#0E0874] text-center">{i.date}</p>
              </div>
              {isOpen === iKey &&
                i.item.map((y, yKey) => (
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
                      // onClick={() => setShowItems(yKey)}
                    >
                      {`${yKey + 1})  ${y.fileName}`}
                      {/* { showItems === yKey && <ShowItem url={y.fullUrl} setShowItems={setShowItems} />} */}
                    </p>
                    <div className="flex flex-row m-2 ">
                      <button
                        className={
                          y.print || y.stop
                            ? " bg-[#9E9E9E] h-[20px] w-[20px] outline-[#9E9E9E] outline outline-offset-2 outline-2 rounded-md hover:bg-[#D9DCE4] hover:outline-[#D9DCE4]"
                            : " bg-[#FF3D00] h-[20px] w-[20px] outline-[#FF3D00] outline outline-offset-2 outline-2 rounded-md hover:bg-[#D9DCE4] hover:outline-[#D9DCE4]"
                        }
                        onClick={() =>
                          handleClickPrint(printFile[date]._id, i._id, y._id)
                        }
                        disabled={y.stop}
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
