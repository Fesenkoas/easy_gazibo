import FileList from "../models/FileList.js";

export const addItem = async (req, res) => {
  
  for (const item of req) {
    try {
      if (item) {
        const { url, folderDate, folderFabric, name, height, width, col } =
          item;
        const isDate = await FileList.findOne({ folderDate });
        if (isDate) {
          const isFabric = isDate.folderFabric.findIndex(
            (item) => item.fabricName === folderFabric
          );
          const isName = isDate.folderFabric.findIndex((item) =>
            item.item.some((file) => file.fileName === name)
          );
          if (isFabric >= 0 && isName < 0) {
            await FileList.findByIdAndUpdate(
              isDate._id,
              {
                $push: {
                  "folderFabric.$[fabric].item": {
                    fullUrl: url,
                    fileName: name,
                    height,
                    width,
                    col,
                  },
                },
              },
              {
                arrayFilters: [
                  {
                    "fabric.fabricName": folderFabric,
                  },
                ],
              }
            );
            console.log("new file", name, "in folder:", folderFabric);
          } else if (isFabric < 0) {
            const upItem = {
              fabricName: folderFabric,
              item: [
                {
                  fullUrl: url,
                  fileName: name,
                  height,
                  width,
                  col,
                },
              ],
            };
            await FileList.findByIdAndUpdate(isDate._id, {
              $push: { folderFabric: upItem },
            });
            console.log("new fabric", folderFabric, "with file:", name);
          }
          //console.log("такой фаил существует");
        } else {
          const newItem = new FileList({
            folderDate,
            folderFabric: [
              {
                fabricName: folderFabric,
                item: [
                  {
                    fullUrl: url,
                    fileName: name,
                    height,
                    width,
                    col,
                  },
                ],
              },
            ],
          });
          await newItem.save();
          console.log("Message Sent");
        }
      }
    } catch (error) {
      console.error("Error in addItem function:", error);
      // Throw the error to handle it upstream
      throw error;
    }
  }
};

//         fullUrl: filePath,
//         folderDate: extractedFolders[0],
//         fabricName: extractedFolders[1] || "Specify fabric",
//         fileName: fileName,
//         height,
//         width,
//         col: parseInt(col.substring(1)) || 0,
