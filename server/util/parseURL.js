
export const parseUrl = (filePath, folderPath, fileName) => {
  
 const folders = folderPath.split("\\");
  
 const ripIndex = folders.indexOf("rip");
 
 const extractedFolders = ripIndex !== -1 && ripIndex < folders.length - 1 ? folders.slice(ripIndex + 1) : [];

 const regex = /(\d+)\s(.+?)\s(\d+)x(\d+)\s?cm\s?(X(\d+))?\.prt/;
 
 const match = fileName.match(regex);

 let height = 0;
 let width = 0;
 let col = 1; 

 if (match) {
   height = match[3];
   width = match[4];
   col = match[6] ? parseInt(match[6]) : 1; 
 }

 if (extractedFolders.length ) {
   return {
     url: filePath,
     folderDate: extractedFolders[0],
     folderFabric: extractedFolders[1] || "Specify fabric",
     name: fileName,
     height,
     width,
     col,
   };
 } else {
   return -1;
 }
  }