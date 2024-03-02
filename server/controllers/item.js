import FileList from "../models/FileList.js";

export const addItem = async (req, res) => {
  try {
    for (const item of req) {
      if (item) {
        const { url, folderDate, folderFabric, name, height, width, col } = item;
        const isFabric = await FileList.findOne({ folderFabric });
        
        if (isFabric) {
          const isDate = isFabric.folderDate.findIndex((item) => item.date === folderDate);
          const isName = isFabric.folderDate.findIndex((item) => item.item.some((file) => file.fileName === name));
          
          if (isDate >= 0 && isName < 0) {
            await FileList.findByIdAndUpdate(isFabric._id,
              {
                $push: {
                  "folderDate.$[date].item": {
                    fullUrl: url,
                    fileName: name, 
                    height,
                    width,
                    col,
                    print: false,
                    waste: 0,
                  },
                },
              },
              {
                arrayFilters: [
                  {
                    "date.date": "03.03" 
                  },
                ],
              }
            );
            console.log("new file", name, "in folder:", folderDate);
            return;
          } 
          if (isDate < 0) {
            const upItem = {
              date: folderDate,
              item: [
                {
                    fullUrl: url,
                    fileName: name,
                    height,
                    width,
                    col,
                    print: false,
                    waste: 0,
                },
              ],
            };
            await FileList.findByIdAndUpdate(isFabric._id, {
              $push: { folderDate: upItem },
            });
            console.log("new Date", folderDate, "with file:", name);
            return;
          }
        } else {
          const newItem = new FileList({
            folderFabric,
            folderDate: [
              {
                date: folderDate,
                item: [
                  {
                    fullUrl: url,
                    fileName: name,
                    height,
                    width,
                    col,
                    print: false,
                    waste: 0,
                  },
                ],
              },
            ],
          });
          await newItem.save();
          console.log("Message Sent");
          return;
        }
      }
    }
  } catch (error) {
    console.error("Error in addItem function:", error);
    // Throw the error to handle it upstream
    throw error;
  }
};