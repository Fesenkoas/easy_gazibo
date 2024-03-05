import React, { useEffect } from "react";
import { SideList } from "../components/SideList";
import { SideStatistic } from "../components/SideStatistic";
import { newData } from "../util/temporaryDB";
import { useDispatch} from "react-redux";
import { getAllPrintFileFetch } from "../features/action/fetchPrint";

export const PageWorker = () => {
  
  const dispatch = useDispatch();
  
  useEffect(()=>{
  dispatch(getAllPrintFileFetch());
  //  if(loading)console.log(printFile);

  },[dispatch])
  return (
    <div className="flex  absolute bottom-0 top-14 inset-x-0">
      {/* -------------------------------------Left---------------------------------------------------- */}
      <SideList />
      {/* -------------------------------------Right--------------------------------------------------- */}
      <SideStatistic data={newData} />
      {/* --------------------------------------------------------------------------------------------- */}
    </div>
  );
};
