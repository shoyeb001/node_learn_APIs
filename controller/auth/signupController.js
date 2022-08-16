import UserSchema from "../../model/UserModel.js";
import bcrypt from "bcrypt";

const signupController = {
   async register(req,res,next){
        const {name,email,password,isAdmin} = req.body;
        
        //hash pasword;

        const salt = bcrypt.genSaltSync(10);
        const hashpass = bcrypt.hashSync(password, salt);

        const newUser = new UserSchema({
            name:name,
            email:email,
            password:hashpass,
            isAdmin:isAdmin
        });

        try {
           await newUser.save();
            res.json({msg:"Signup Successfully"});
        } catch (error) {
            res.json({msg:error.message});
        }
    }
}

export default signupController;
