import { Router } from "express";
import { stopPrintFile } from "../controllers/Desig.js";

const router = new Router()

//Get All File
//http://localhost:3002/print/get
//router.get('/get', getAll);

//Update File
//http://localhost:3002/desig/stop
router.put('/stop', stopPrintFile);

router.delete('/delete',)

export default router;

