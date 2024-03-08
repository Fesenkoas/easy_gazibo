import React from "react";
import { SideList } from "../components/SideList";
import { SideStatistic } from "../components/SideStatistic";

export const PageWorker = () => {

  
  return (
    <div className="flex  absolute bottom-0 top-14 inset-x-0">
      {/* -------------------------------------Left---------------------------------------------------- */}
      <SideList/>
      {/* -------------------------------------Right--------------------------------------------------- */}
      <SideStatistic />
      {/* --------------------------------------------------------------------------------------------- */}
    </div>
  );
};
