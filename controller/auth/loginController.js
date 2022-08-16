import UserSchema from "../../model/UserModel.js";
import { JWT_SECRET } from "../../config/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import customErrorHandeler from "../../services/customErrorHandler.js";

const loginController = {
    async login(req,res,next){
        const {email,password} = req.body;
        try {
            const isExit = await UserSchema.findOne({email:email});
            if (!isExit) {
               return next(customErrorHandeler.unAuthorizeUser("email does not exit"));
            }
            
            const exit = bcrypt.compareSync(req.body.password, isExit.password);
            if (!exit) {
               return res.json({msg:"Please enter correct password"});
            } 

            var token = jwt.sign({ 
                id:isExit._id,
                isAdmin:isExit.isAdmin
            }, JWT_SECRET);

            const {password,is_admin,__v, ...others} = isExit._doc;

            return res.cookie("access_token",token,{httpOnly:true}).status(201).json(others);


        } catch (error) {
            next(error);
        }
    }
}

export default loginController;
