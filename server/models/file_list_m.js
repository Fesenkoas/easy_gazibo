import mongoose from "mongoose";

const FileListShema = new mongoose.Schema(
  {
    fullUrl: { type: String, required: true },
    fileName: { type: String, required: true },
    folderFabric: { type: String, required: true },
    folderDate: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("FileList", FileListShema);
