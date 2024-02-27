function parseUrl(filePath, folderPath, fileName) {
    // Splitting the folderPath by backslash to get individual folders
    const folders = folderPath.split("\\");
    
    // Finding the index of "RIP" folder
    const ripIndex = folders.indexOf("RIP");
    
    // Extracting folders after "RIP", if it exists
    const extractedFolders = ripIndex !== -1 && ripIndex < folders.length - 1 ? folders.slice(ripIndex + 1) : [];
  
    // Source string containing file information
    const string = "3 240 Konusim 160x198cm X3.prt";
  
    // Regular expression pattern to extract dimensions and quantity
    const regex = /(\d+)\s(\d+)\s(.+?)(\d+)x(\d+)cm\s(X\d+)\.prt/;
    
    // Extracting dimensions and quantity from the string using regex
    const [, , , , height, width, col] = string.match(regex) || [, , , , 0, 0, 0];
  
    // Check if extractedFolders has at least 2 elements before constructing the object
    if (extractedFolders.length >= 2) {
      // Constructing the object with parsed information
      return {
        url: filePath,
        folderDate: extractedFolders[0],
        folderFabric: extractedFolders[1] || "Specify fabric",
        name: fileName,
        height,
        width,
        col: parseInt(col.substring(1)) || 0,
      };
    } else {
      // Return an empty object if the condition is not met
      return {};
    }
  }
  
  module.exports = { parseUrl };