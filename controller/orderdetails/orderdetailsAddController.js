import OrderdetailsSchema from "../../model/OrderdetailsModel";

const orderdetailsAddController = {
    async AddOrderDetails(req,res,next){
        const newdetails = new OrderdetailsSchema(req.body);
        try {
            await newdetails.save();
            res.json({msg:"Details Saved"});
        } catch (error) {
            next(error);
        }
    }
}

export default orderdetailsAddController;
