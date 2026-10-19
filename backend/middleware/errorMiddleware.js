exports.notFound=(req,res)=>res.status(404).json({message:`Route not found: ${req.method} ${req.originalUrl}`});
exports.errorHandler=(err,_req,res,_next)=>{console.error(err);res.status(err.name==='ValidationError'?400:500).json({message:err.message||'Server error'});};
