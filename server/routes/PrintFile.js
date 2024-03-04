import { Router } from "express";
import { getAll, updatePrintFile } from "../controllers/PrintFile.js";


const router = new Router()

//Get All File
//http://localhost:3002/print/get
router.get('/get', getAll);

//Update File
//http://localhost:3002/print/update
router.put('/update', updatePrintFile);

export default router;