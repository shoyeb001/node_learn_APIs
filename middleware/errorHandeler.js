export default function errorHandeler(error,req,res,next){
    const errorStatus = error.status || 500;
    const errorMessage = error.errormessage || "Internal server error";

    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: error.stack,
    })

}
