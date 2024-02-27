import mongoose from "mongoose";

// const FileListShema = new mongoose.Schema(
//   {
//     fullObject: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "FolderDate",
//       },
//     ],
//   },
//   { timestamps: true }
// );

// export default mongoose.model("FileList", FileListShema);


const fabricSchema = new mongoose.Schema({
  fabricName: { type: String, required: true },
  item:[{ 
    fullUrl: { type: String, required: true },
    fileName: { type: String, required: true },
    height: { type: Number, required: true },
    width: { type: Number, required: true },
    col: { type: Number, required: true }
  }],
  
});

const folderDateSchema = new mongoose.Schema({
  folderDate: { type: String, required: true },
  folderFabric: [fabricSchema]
});

export default mongoose.model('FileList', folderDateSchema);
