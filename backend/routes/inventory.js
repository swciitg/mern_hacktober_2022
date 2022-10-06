import express from "express";
import { getAllInventory } from "../controllers/inventoryController.js";


const router = express.Router();


router
    .route('/')
    .get(getAllInventory);



export default router;