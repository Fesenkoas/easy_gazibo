import mongoose from "mongoose";

const FolderFabricShema = new mongoose.Schema(
  {
    fabricName: { type: String, required: true },
    item: [
      {
        fullUrl: { type: String, required: true },
        fileName: { type: String, required: true },
        height: { type: Number, required: true },
        width: { type: Number, required: true },
        col: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("FolderFabric", FolderFabricShema);
