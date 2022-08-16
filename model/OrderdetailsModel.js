import mongoose from "mongoose";

const OrderdetailsSchema = new mongoose.Schema({
    order_id:{type:String, required:true},
    product_id: {type:String, required:true},
    quantity: {type:Number, required:true},
    price:{type:Number, required:true},
    total_price:{type:Number, required:true}
});

export default mongoose.model("Orderdetails",OrderdetailsSchema);
