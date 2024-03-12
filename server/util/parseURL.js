export const parseUrl = (filePath, folderPath, fileName) => {
  const folders = folderPath.split("\\");

  const ripIndex = folders.indexOf("rip");

  const extractedFolders =
    ripIndex !== -1 && ripIndex < folders.length - 1
      ? folders.slice(ripIndex + 1)
      : [];

  const parts = fileName.split(" ");
  const size = parts[parts.length - 2];
  const sizeDigits = size.split(/[^\d]+/);
  const width = sizeDigits[0]; 
  const height = sizeDigits[1]; 
  const dimensions = parts[parts.length - 1];
  const dimensionsDigits = dimensions.split(/[^\d]+/);
  const col = dimensionsDigits[1]; 

  if (extractedFolders.length > 0) {
    
    return {
      url: filePath,
      folderDate: extractedFolders[0],
      folderFabric: extractedFolders[1],
      name: fileName,
      height,
      width,
      col,
    };
  } else {
    return -1;
  }
};
