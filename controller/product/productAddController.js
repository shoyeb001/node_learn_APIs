import ProductSchema from "../../model/ProductModel.js";

const productAddController = {
    async AddProduct(req,res,next){
        const newpro = new ProductSchema(req.body);
       try {
         await newpro.save();
        res.json({msg:"Product Added Successfully"});
       } catch (error) {
        next(error);
       }
    }
}

export default productAddController;
