import mongoose from "mongoose";

const FileListShema = new mongoose.Schema(
  {
    fullObject: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FolderDate",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("FileList", FileListShema);
