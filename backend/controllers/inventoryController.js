import Inventory from "../models/inventory.js";

export const getAllInventory = async (req, res, next) => {
  try {
    const inventoryDetails = await Inventory.find();
    return res.status(200).json({
      success: true,
      results: inventoryDetails.length,
      data: inventoryDetails,
      msg: "Inventory details fetched successfully!",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
      msg: err,
    });
  }
};

export const createInventory = async (req, res, next) => {
  try {
    const newInventory = await Inventory.create(req.body);
    return res.status(200).json({
      success: true,
      data: newInventory,
      msg: "Inventory created successfully!",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
      msg: err.message,
    });
  }
};

export const updateInventory = async (req, res, next) => {
  try {
    const inventory = await Inventory.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true, // also return the new field
        runValidators: true, // do a validation check in any
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        inventory,
      },
      msg: "Inventory updated successfully!",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
      msg: err.message,
    });
  }
};

export const deleteInventory = async (req, res, next) => {
  try {
    const inventory = await Inventory.findByIdAndDelete(req.params.id);
    if (!inventory) {
      throw new Error("No inventory found with that ID");
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err,
      msg: err.message,
    });
  }
};

//export { getAllInventory }
