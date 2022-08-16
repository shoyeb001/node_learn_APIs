import ProductSchema from "../../model/ProductModel.js";

const productViewcontroller = {
    async ViewProduct(req,res,next){
        try {
            const product = await ProductSchema.find();
            res.status(200).json(product);
        } catch (error) {
            next(error);
        }
    },
    async ViewProductById(req,res,next){
        const id = req.params.id;
        try {
            const data = await ProductSchema.findById({_id:id});
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }
}

export default productViewcontroller;
