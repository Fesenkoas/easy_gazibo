import mongoose from "mongoose";

const FolderFabricShema = new mongoose.Schema(
  {
    folderFabric: [
      {
        fullUrl: { type: String, required: true },
        fileName: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("FolderFabric", FolderFabricShema);
