import PrintFile from "../models/PrintFile";

export const isDataFolder = async (isFabric, item) => {
  const { url, folderDate, folderFabric, name, height, width, col } = item;
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
          stop: false,
          waste: 0,
        },
      ],
    };
    await PrintFile.findByIdAndUpdate(isFabric._id, {
      $push: { folderDate: upItem },
    });
    console.log("new Date", folderDate, "with file:", name);
  }
};

export const isDataAndisName = async (isFabric, item) => {
  const { url, folderDate, folderFabric, name, height, width, col } = item;
  const isName = isFabric.folderDate[isDate].item.findIndex(
    (item) => item.fileName === name
  );
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
  }
};
