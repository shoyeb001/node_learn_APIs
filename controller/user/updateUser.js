import UserSchema from "../../model/UserModel.js";

const updateUser = {
    async updateUser(req,res,next){
        const id = req.params.id;
        try {
            await UserSchema.findByIdAndUpdate(id, { $set: req.body }, { new: true });
            res.status(201).json({msg:"user updated successfully"});
        } catch (error) {
            next(error);
        }
        
    }
}

export default updateUser;
