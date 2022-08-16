import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title:{type:String, required:true},
    price:{type:Number, required:true},
    category:{type:String, required:true},
    discountPrice:{type:Number, required:true},
    details:{type:String, required:true},
    image:{type:String, required:true},
}, {timestamps:true});

export default mongoose.model("Product",ProductSchema);
