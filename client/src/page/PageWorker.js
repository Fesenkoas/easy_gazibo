import React from "react";
import { SideList } from "../components/SideList";
import { SideStatistic } from "../components/SideStatistic";
import { data, newData } from "../util/temporaryDB";

export const PageWorker = () => {
  return (
    <div className="flex  absolute bottom-0 top-14 inset-x-0">
      {/* -------------------------------------Left---------------------------------------------------- */}
      <SideList data={newData}/>
      {/* -------------------------------------Right--------------------------------------------------- */}
      <SideStatistic />
      {/* --------------------------------------------------------------------------------------------- */}
    </div>
  );
};

// {/* {timedb.map((item, key) => (
//         <div key={key}>
//           <div>{item.folderDate}</div>
//           <div>
//             {item.folderFabric.map((i, key) => (
//               <div key={key}>
//                 <div>{i.fabricName}</div>
//                 <div>
//                   {i.item.map((y, key) => (
//                     <div>
//                       <div>{y.url}</div>
//                       <div>{y.fileName}</div>
//                       <div>{y.width}</div>
//                       <div>{y.height}</div>
//                       <div>{y.col}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))} */}