import mongoose  from "mongoose";

const OrderSchema = new mongoose.Schema({
    user_id: {type:String, required:true},
    invoice_no: {type:String, required:true},
    price: {type:Number, required:true},
    payment_type: {type:String, required:true},
    payment_status: {type:String, required:true},
    order_address: {type:String, required:true},
    order_status: {type:String, required:true}

});

export default mongoose.model("Order",OrderSchema);
