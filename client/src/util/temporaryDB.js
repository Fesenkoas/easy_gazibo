export const signal = (printFile, key) => {

for (let i = 0; i < printFile.folderDate.length; i++) {
  const date = printFile.folderDate[i];
  for (let j = 0; j < date.item.length; j++) {
    const item = date.item[j];
    if (item.print === false) {
      
      return true
    }
  }
}
return false;
};
