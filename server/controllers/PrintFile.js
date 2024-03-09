import PrintFile from "../models/PrintFile.js";
import { sendObjectUpdateNotificationToAllClients } from "../socket/configureWebSocket.js";
//Add Print File
export const AddPrintFile = async (req, res) => {
  try {
    // console.log(req);
    for (const item of req) {
      if (item) {
        const { url, folderDate, folderFabric, name, height, width, col } =
          item;
        const isFabric = await PrintFile.findOne({ folderFabric });

        if (isFabric) {
          const isDate = isFabric.folderDate.findIndex(
            (item) => item.date === folderDate
          );
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
            await PrintFile.findByIdAndUpdate(isFabric._id, {
              $push: { folderDate: upItem },
            });
            console.log("new Date", folderDate, "with file:", name);
            return;
          }
          const isName = isFabric.folderDate[isDate].item.findIndex(
            (item) => item.fileName === name
          );
          if (isDate >= 0 && isName < 0) {
            await PrintFile.findByIdAndUpdate(
              isFabric._id,
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
                arrayFilters: [{ "date.date": folderDate }],
              }
            );
            console.log("new file", name, "in folder:", folderDate);
            return;
          }
        } else {
          const newItem = new PrintFile({
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
    // return res.json({
    //   message: "File Add",
    // });
  } catch (error) {
    console.error("Error in addItem function:", error);
    throw error;
  }
};

//Get All File
export const getAll = async (req, res) => {
  try {
    const file = await PrintFile.find().sort("-createdAt");
    if (!file) {
      return res.json({ message: "Not File" });
    }
    res.json(file);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Update File

export const updatePrintFile = async (req, res) => {
  try {
    
    const { id } = req.body;
    
    const file = await PrintFile.findById(id.id_0);
    if (!file) {
      return res.json({ message: "Файл с указанным идентификатором не найден." });
    }
    const isDate = file.folderDate.findIndex((item) => item._id == id.id_1);

    if (!isDate) {
      return res.json({ message: "Папка с указанным идентификатором не найден." });
    }
    const isName = file.folderDate[isDate].item.find(
      (item) => item._id == id.id_2
    );
    if (!isName) {
      return res.json({ message: "Элемент с указанным идентификатором не найден." });
    }
    isName.print = true;
    await file.save();

    sendObjectUpdateNotificationToAllClients()

    res.json({
      message: "Успешно обновлено",
      updatedItem: isName,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
