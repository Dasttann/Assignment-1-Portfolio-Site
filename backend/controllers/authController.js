const jwt = require('jsonwebtoken');
const User = require('../models/User');
function token(user){return jwt.sign({id:user._id,name:user.name,email:user.email},process.env.JWT_SECRET,{expiresIn:'1h'});}
exports.signIn=async(req,res,next)=>{try{const{email,password}=req.body;if(!email||!password)return res.status(400).json({message:'Email and password are required'});const user=await User.findOne({email});if(!user||!(await user.matchPassword(password)))return res.status(401).json({message:'Invalid email or password'});res.json({message:'Signed in successfully',token:token(user),user:{id:user._id,name:user.name,email:user.email}});}catch(e){next(e);}};
exports.signOut=async(_req,res)=>res.json({message:'Signed out successfully. Remove the JWT token on the client.'});
