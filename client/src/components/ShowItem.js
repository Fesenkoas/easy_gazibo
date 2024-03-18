import React from 'react'

export const ShowItem = ({url, setShowItems}) => {
    const newFilePath = url.replace(/\.prt$/, ".jpg");
    console.log(url);
  return (
    <div className="fixed w-[600px]  bg-white m-auto">
    <div>
      <img
        src={newFilePath}
        alt=""
        onClick={() => setShowItems(false)}
      />
      
    </div>
  </div>
  )
}
