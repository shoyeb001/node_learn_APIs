import mongoose from "mongoose";
import OrderSchema from "../../model/OrderModel";

const vieworderController = {
    async ViewPendingOrder(req,res,next){
        try {
            const pending_orders = await OrderSchema.find({ order_status: 'undelivered' });
            res.status(200).json(pending_orders);
        } catch (error) {
            next(error);
        }
    },

    async ViewCompleteOrder(req,res,next){
        try {
            const complete_orders = await OrderSchema.find({order_status: 'delivered'});
            res.status(200).json(complete_orders);
        } catch (error) {
            next(error);
        }
    }
}

export default vieworderController;
