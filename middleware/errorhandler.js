const {constants} = require("../constants");
const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                tittle: "VALIDATION FAILED",
                message: err.message, 
                stackTrace:err.stack
            });
            break;
        case  constants.NOT_FOUND:
            res.json({
                tittle: "NOT FOUND",
                message: err.message, 
                stackTrace:err.stack
            });
            break;
        case  constants.UNAUTHORIZED:
            res.json({
                tittle: "un authorized",
                message: err.message, 
                stackTrace:err.stack
            });
            break;
        case  constants.FORBIDDEN:
            res.json({
                tittle: "forbidden",
                message: err.message, 
                stackTrace:err.stack
            });
            break;
        case  constants.SERVER_ERROR:
            res.json({
                tittle: "server error",
                message: err.message, 
                stackTrace:err.stack
            });
            break;
        default:
            console.log("No error, All good!")
            break;
    }
}
module.exports = errorHandler;