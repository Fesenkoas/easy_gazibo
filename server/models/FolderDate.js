import mongoose from "mongoose";

const FolderDateShema = new mongoose.Schema(
  {
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