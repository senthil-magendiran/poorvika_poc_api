import mongoose, { Schema } from 'mongoose';

const ordersSchema: Schema = new mongoose.Schema({
    mobileNumber: String,
    name: String,
    product: String,
    price: String,
    deviceProblems: [String],
    functionalDefects: [String],
    accessoryList: [String],
});


const Orders = mongoose.model("orders", ordersSchema);  
export default Orders;