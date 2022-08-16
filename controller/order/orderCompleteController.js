import mongoose from "mongoose";
import OrderSchema from "../../model/OrderModel";

const orderCompleteController = {
    async CompleteOrder(req,res,next){
        const order_id = req.params.order_id;
        try {
            const complete = await OrderSchema.findOneAndUpdate(order_id,{$set:{order_status: "delivered"}}, {new:true});
           
            res.status(200).json({msg:"Order delivered"});
        } catch (error) {
            next(error);
        }
    }
}

export default orderCompleteController;
