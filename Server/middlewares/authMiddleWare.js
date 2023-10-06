import jwt from 'jsonwebtoken';
import authModel from '../models/authModel.js';

const checkIsUserAuth = async(req,res,next)=>{
let token;
const{authorization}=req.headers;

if (authorization && authorization.startsWith ("Bearer")) {
    try {
        console.log(authorization.split(" ")[1],"authorization")
        token = authorization.split(" ")[1];

        const {userID} = jwt.verify(token,"pleaseSubscribe");
        console.log(userID,"userID")
        req.user =await authModel.findById(userID).select("--password");
        next()
        
    } catch (error) {
        
    return res.status(401).json({message: "unAuthorized User"}); 
    }
    
}else{
    return res.status(401).json({message: "unAuthorized User"})
}
};

export default checkIsUserAuth;