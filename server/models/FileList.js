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
  fabricName: { type: String },
  item:[{ 
    fullUrl: { type: String },
    fileName: { type: String },
    height: { type: Number },
    width: { type: Number },
    col: { type: Number }
  }],
  
});

const folderDateSchema = new mongoose.Schema({
  folderDate: { type: String },
  folderFabric: [fabricSchema]
});

export default mongoose.model('FileList', folderDateSchema);
