const jwtMiddleware = (req,res,next)=>{
    const token = req.header("Authorization")?.replace("Bearer ","");
    if(!token){
        return res.status(401).send("Authorization token required");
    }
    try{
        const decode = jwt.verify(token,"hehe");
        req.user=decode
        next();
    }
    catch(err){
        res.status(400).send("Invalid token")
    }
}
export default jwtMiddleware