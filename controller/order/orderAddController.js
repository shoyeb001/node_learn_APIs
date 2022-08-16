import OrderModel from "../../model/OrderModel";
import OrderSchema from "../../model/OrderModel";

const orderAddController = {
    async Orderadd(req,res,next){
        const {invoice_no, price, payment_type, payment_status, order_address, order_status} = req.body;
        const id = req.params.id;
        const neworder = OrderModel({
            user_id : id,
            invoice_no : invoice_no,
            price : price,
            payment_type : payment_type,
            payment_status : payment_status,
            order_status : order_status,
            order_address : order_address
        });

        try {
            const saveorder =  await neworder.save();
            res.json({msg:"Order Completed Successfully"})
        } catch (error) {
            next(error);
        }
    }
}

export default orderAddController;
