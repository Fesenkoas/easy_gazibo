import PrintFile from "../models/PrintFile.js";
//Add Print File
export const AddPrintFile = async (req, res) => {
  try {
    for (const item of req) {
      if (item) {
        const { url, folderDate, folderFabric, name, height, width, col } =
          item;
        const isFabric = await PrintFile.findOne({ folderFabric });

        if (isFabric) {
          const isDate = isFabric.folderDate.findIndex(
            (item) => item.date === folderDate
          );
          const isName = isFabric.folderDate.findIndex((item) =>
            item.item.some((file) => file.fileName === name)
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
  } catch (error) {
    console.error("Error in addItem function:", error);
    // Throw the error to handle it upstream
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

//Update Post

export const updatePost = async (req, res) => {
  try {
    // const { title, text, id } = req.body;
    // const file = awaitPrintFile.findById(name);
    // if (req.files) {
    //   let fileName = Date.now().toString() + req.files.image.name;
    //   const __dirname = dirname(fileURLToPath(import.meta.url));
    //   req.files.image.mv(path.join(__dirname, "..", "upload", fileName));
    //   post.imgUrl = fileName || "";
    // }
    // post.title = title;
    // post.text = text;
    // await post.save()
    // res.json(post);
  } catch (error) {
    res.json({ message: error.message });
  }
};
