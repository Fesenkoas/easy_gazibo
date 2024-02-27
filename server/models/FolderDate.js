import mongoose from "mongoose";

const FolderDateShema = new mongoose.Schema(
  {
    nameDate: { type: String, required: true },
    folderDate:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FolderFabric",
      },
    ]
  },
  { timestamps: true }
);

export default mongoose.model("FolderDate", FolderDateShema);