import mongoose, { Schema, model } from "mongoose";



const inventorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    itemId: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    consumable: {
        type: Boolean
    },
    image: {
        type: String,
        required: false
    }
});


export default model('inventory', inventorySchema);