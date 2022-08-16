import UserSchema from "../../model/UserModel.js";

const deleteUser = {
    async deleteUser(req,res,next){
        const id = req.params.id;
        try {
            await UserSchema.findByIdAndDelete(req.params.id); // find by id and delete from cluster 
            res.status(201).json({msg:"user deleted successfully"});
        } catch (error) {
            next(error);
        }
    }
    
}

export default deleteUser;
