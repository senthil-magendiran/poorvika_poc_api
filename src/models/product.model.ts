import mongoose, { Schema } from 'mongoose';


const productSchema: Schema = new mongoose.Schema({
    category: String,
    brand: String,
    model: String,
    price: String,
    soldCount: String,
    image: String,
    created_at: { type: Date, default: Date.now }
})


const Products = mongoose.model("products", productSchema);

export default Products;