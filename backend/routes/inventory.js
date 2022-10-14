import express from "express";
import {
  getAllInventory,
  createInventory,
} from "../controllers/inventoryController.js";

const router = express.Router();

router.route("/").get(getAllInventory).post(createInventory);

export default router;
