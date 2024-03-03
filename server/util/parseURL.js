
export const parseUrl = (filePath, folderPath, fileName) => {
  // console.log(filePath);
  // console.log(folderPath);
  // console.log(fileName);
 // Splitting the folderPath by backslash to get individual folders
 const folders = folderPath.split("\\");
  
 // Finding the index of "RIP" folder
 const ripIndex = folders.indexOf("rip");
 
 // Extracting folders after "RIP", if it exists
 const extractedFolders = ripIndex !== -1 && ripIndex < folders.length - 1 ? folders.slice(ripIndex + 1) : [];

 // Regular expression pattern to extract dimensions and quantity
 const regex = /(\d+)\s(.+?)\s(\d+)x(\d+)\s?cm\s?(X(\d+))?\.prt/;
 
 // Extracting dimensions and quantity from the fileName using regex
 const match = fileName.match(regex);

 let height = 0;
 let width = 0;
 let col = 1; // Default quantity is 1

 if (match) {
   height = match[3];
   width = match[4];
   col = match[6] ? parseInt(match[6]) : 1; // If Xn is present, extract n as col
 }

 // Check if extractedFolders has at least 2 elements before constructing the object
 if (extractedFolders.length >= 2 && fileName.match(regex)) {
   // Constructing the object with parsed information
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
   // Return an empty object if the condition is not met
   return -1;
 }
  }