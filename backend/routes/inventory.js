import express from "express";
import {
  getAllInventory,
  createInventory,
  updateInventory,
} from "../controllers/inventoryController.js";

const router = express.Router();

router.route("/").get(getAllInventory).post(createInventory);

router.route("/:id").put(updateInventory);

export default router;
