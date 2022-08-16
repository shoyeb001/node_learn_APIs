import UserSchema from "../../model/UserModel.js";

const viewUser = {
    async viewUser(req,res,next){
        try {
            const data =  await UserSchema.find();
            res.status(200).json(data);
         } catch (error) {
             next(error);
         }
    },

    async viewUserbyId(req,res,next){
        const id = req.params.id;
         try {
            const data =  await UserSchema.findById({_id:id});
            res.status(200).json(data);
        } catch (error) {
           next(error);
        }
    }
}

export default viewUser;
