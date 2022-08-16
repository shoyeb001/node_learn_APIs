class customErrorHandeler extends Error{
    constructor(status,message){
        super();
        this.status = status;
        this.message = message;
    }

    static unAuthorizeUser(message="User does not exits"){
        return new customErrorHandeler(401,message);
    }
}

export default customErrorHandeler;
