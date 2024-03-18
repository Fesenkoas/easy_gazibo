import React from "react";

export const ShowItem = ({ url, setShowItems }) => {
  const newFilePath = url.replace(/\.prt$/, ".jpg");
  console.log(newFilePath);
  return (
    <div className="fixed w-[600px] h-[500px]  bg-white m-auto">
      <div>
        <img
        src={'file:///C:/Users/Fesenko/Desktop/rip/14.03/Flag/10 153x80cm X8.jpg'}
        alt=""
        onClick={() => setShowItems(false)}
      />
      </div>
    </div>
  );
};
