import ProductSchema from "../../model/ProductModel.js";

const productModifyController = {
    async UpdateProduct(req,res,next){
        try {
             await ProductSchema.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
             //update 1 should be use.
            res.status(200).json({msg:"Product updated successfully"});
        } catch (error) {
            next(error)
        }
    },

    async DeleteProduct(req,res,next){
        try {
            await ProductSchema.findByIdAndDelete(req.params.id);
            res.status(200).json({msg:"Product deleted successfully"})
        } catch (error) {
            next(error);
        }
    }
}

export default productModifyController;
