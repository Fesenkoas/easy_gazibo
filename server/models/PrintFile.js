import mongoose from "mongoose";

const dateSchema = new mongoose.Schema({
  date: { type: String },
  item: [
    {
      fullUrl: { type: String },
      fileName: { type: String },
      height: { type: Number },
      width: { type: Number },
      col: { type: Number },
      print: { type: Boolean },
      waste: { type: Number },
    },
  ],
});

const folderFabricSchema = new mongoose.Schema({
  folderFabric: { type: String },
  folderDate: [dateSchema],
});

export default mongoose.model("PrintFile", folderFabricSchema);
