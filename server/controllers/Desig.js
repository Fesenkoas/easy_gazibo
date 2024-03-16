import PrintFile from "../models/PrintFile.js";
import { sendObjectUpdateNotificationToAllClients } from "../socket/configureWebSocket.js";

//Update File
export const stopPrintFile = async (req, res) => {
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
    isName.stop = !id.stop;
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

//Remove File

export const removePrintFile = async (req, res) => {
  try {
    const { folderDate, folderFabric, name } = req;

    const isFabric = await PrintFile.findOne({ folderFabric });

    if (!isFabric) {
      return console.log("FolderFabric not found");
    }

    const isDate = isFabric.folderDate.findIndex(
      (item) => item.date === folderDate
    );

    if (isDate < 0) {
      return console.log("FolderDate not found");
    }

    const isName = isFabric.folderDate[isDate].item.findIndex(
      (item) => item.fileName === name
    );

    if (isName < 0) {
      return console.log("File not found");
    }

    isFabric.folderDate[isDate].item.splice(isName, 1);

    await isFabric.save();
    
    sendObjectUpdateNotificationToAllClients();

    console.log("File deleted successfully");
  } catch (error) {
    console.log("File error");
  }
};

// try {
//   const { folderDate, folderFabric, name } = req;

//   const isFabric = await PrintFile.findOne({ folderFabric });

//   const isDate = isFabric.folderDate.findIndex((item) => item.date === folderDate);

//   const isName = isFabric.folderDate[isDate].item.findIndex((item) => item.fileName === name);

//   const id = isFabric.folderDate[isDate].item[isName]._id;
//    console.log(id);
//   const file = await isFabric.folderDate[isDate].item.findById(id);
//   console.log(file);
//   if (!file) return console.log("not delete");

//   console.log("delete");
//   // await User.findByIdAndUpdate(req.userId, {
//   //   $pull: { post: req.params.id },
//   // });
//   // res.json({ message: "Post delete done!" });
// } catch (error) {
//   console.log("message: error.message" );
// }
