import React, { useEffect, useState } from "react";
import { SideList } from "../components/SideList";
import { SideStatistic } from "../components/SideStatistic";
import { newData } from "../util/temporaryDB";
import { useDispatch, useSelector} from "react-redux";
import { getAllPrintFileFetch } from "../features/action/fetchPrint";

export const PageWorker = () => {
  const { printFile, loading } = useSelector((state) => state.printFile);
  const[fabricName, setFabricName] =useState()
  const dispatch = useDispatch();
  
  useEffect(()=>{
  dispatch(getAllPrintFileFetch());
  },[dispatch])
  return (
    <div className="flex  absolute bottom-0 top-14 inset-x-0">
      {/* -------------------------------------Left---------------------------------------------------- */}
      <SideList setFabricName={setFabricName}/>
      {/* -------------------------------------Right--------------------------------------------------- */}
      <SideStatistic data={printFile} fabricName={fabricName} />
      {/* --------------------------------------------------------------------------------------------- */}
    </div>
  );
};
