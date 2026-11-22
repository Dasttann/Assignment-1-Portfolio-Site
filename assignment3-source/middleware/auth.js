const jwt=require('jsonwebtoken');
function auth(req,res,next){
 const h=req.header('Authorization')||''; const token=h.startsWith('Bearer ')?h.slice(7):null;
 if(!token)return res.status(401).json({message:'Authorization token required'});
 try{req.user=jwt.verify(token,process.env.JWT_SECRET||'development-secret-change-me');next();}
 catch(e){res.status(401).json({message:'Invalid or expired token'});}
}
function adminOnly(req,res,next){if(req.user?.role!=='admin')return res.status(403).json({message:'Admin role required'});next();}
module.exports={auth,adminOnly};