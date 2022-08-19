import ArticleSchema from "../../model/ArticleModel";
import cumtomEroorHandler from "../../services/customErrorHandler";
import multer, {diskStorage} from "multer";
import path from "path";
import fs from "fs";
import customErrorHandeler from "../../services/customErrorHandler";

const storage = multer.diskStorage({
    destination:(req,file,cb)=>cb(null,"uploads"),
    filename: (req,file,cb)=>{
        const filename = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        cb(null, filename);
    }
});

const handelMultipartData = multer({
    storage:storage,
    limits:{fileSize:1000000*5},
}).single("image");


const ArticleAddController = {
    async ArticleAdd(req,res,next){
        handelMultipartData(req,res,async(error)=>{
            if (error) {
                return next(customErrorHandeler.imageSendingEroor());
            }
            const {title,description} = req.body;
            if (!req.file) {
               return res.status(501).json({msg:"Image is required"});
            }
            const filepath = req.file.path; //getting the path of the file as we need to store the path
          
            try {
                const newdata = new ArticleSchema({
                    title,
                    description,
                    image:filepath,
                });
    
                const savedata = await newdata.save();
                res.json(savedata);
            } catch (error) {
                fs.unlink(`${appRoot}/${filepath}`,(err)=>{
                    console.log("deleted");
                });
                next(error);
            }

        });

    },

    async articleUpdate(req,res,next){
        handelMultipartData(req,res,async(error)=>{
            if (error) {
                return next(customErrorHandeler.imageSendingEroor());
            }

            const id = req.params.id;
            let filepath;

            if (req.file) {
               filepath = req.file.path;

                const data  = await ArticleSchema.findById({_id:id});
                fs.unlink(`${appRoot}/${data.image}`,(error)=>{
                    console.log("image deleted");
                });
            }

            const {title,description} = req.body;

            try {
                await ArticleSchema.findOneAndUpdate(
                    { _id:id },
                    {
                        title,
                        description,
                        ...(req.file && { image: filepath }),
                    },
                    { new: true }
                );
                return res.status(200).json({msg:"Updated Successfully"});
            } catch (error) {
                next(error);
            }

        });
    }
}

export default ArticleAddController;
