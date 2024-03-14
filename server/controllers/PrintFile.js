import PrintFile from "../models/PrintFile.js";
import { sendObjectUpdateNotificationToAllClients } from "../socket/configureWebSocket.js";

{/* -------------------------------------------Add Print File-------------------------------------------------- */}
export const AddPrintFile = async (req, res) => {
  try {
    for (const item of req) {
      if (item) {
        const { url, folderDate, folderFabric, name, height, width, col } =
          item;
        const isFabric = await PrintFile.findOne({ folderFabric });

        if (isFabric) {
          {/* --------------------------------------------isDate------------------------------------------------- */}
          const isDate = isFabric.folderDate.findIndex((item) => item.date === folderDate);
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
                  stop: false,
                  waste: 0,
                },
              ],
            };
            await PrintFile.findByIdAndUpdate(isFabric._id, {
              $push: { folderDate: upItem },
            });
            console.log("new Date", folderDate, "with file:", name);
            // res.json({ message: `new Date ${folderDate} with file:${name}` });
          }
          {/* -------------------------------------------isName-------------------------------------------------- */}
          const isName = isFabric.folderDate[isDate].item.findIndex((item) => item.fileName === name);

          if (isName < 0) {
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
                    stop: false,
                    waste: 0,
                  },
                },
              },
              { arrayFilters: [{ "date.date": folderDate }] }
            );
            console.log("new file", name, "in folder:", folderDate);
            //   res.json({ message: `new file ${name} in folder:${folderDate}` });
            {/* --------------------------------------------------------------------------------------------- */}
          }
        } else {
           {/* ------------------------------------------Empty--------------------------------------------------- */}
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
                    stop: false,
                    waste: 0,
                  },
                ],
              },
            ],
          });
          await newItem.save();
          console.log("Message Sent");
          //  res.json({ message: "New file Add" });
        }
         {/* --------------------------------------------------------------------------------------------- */}
      }
    }
  } catch (error) {
    console.error("Error in AddPrintFile function:", error);
    // res.status(500).json({ error: "Internal Server Error" });
  }
};

 {/* -------------------------------------------Get All File-------------------------------------------------- */}
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

 {/* -------------------------------------------Update File-------------------------------------------------- */}
export const updatePrintFile = async (req, res) => {
  try {
    const { id } = req.body;

    const file = await PrintFile.findById(id.id_0);
    if (!file) {
      return res.json({
        message: "Файл с указанным идентификатором не найден.",
      });
    }
    const isDate = file.folderDate.findIndex((item) => item._id == id.id_1);

    if (!isDate < 0) {
      return res.json({
        message: "Папка с указанным идентификатором не найден.",
      });
    }
    const isName = file.folderDate[isDate].item.find(
      (item) => item._id == id.id_2
    );
    if (!isName) {
      return res.json({
        message: "Элемент с указанным идентификатором не найден.",
      });
    }
    isName.print = true;
    await file.save();

    sendObjectUpdateNotificationToAllClients();

    res.json({
      message: "Успешно обновлено",
      updatedItem: isName,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};


{/* -------------------------------------------Delete File-------------------------------------------------- */}
// export const removeItem = async (req, res) => {
//   try {
//     const item = await ItemShop.findByIdAndDelete(req.body.id);
//     if (!item) return res.json({ message: "empty" });
//     res.json({ message: "Item Delete" });
//   } catch (error) {
//     console.log(error.message);
//     res.json({ message: "Error in form" });
//   }
// };
