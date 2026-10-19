const express=require('express');
module.exports=function(controller){const router=express.Router();router.route('/').get(controller.getAll).post(controller.create).delete(controller.removeAll);router.route('/:id').get(controller.getById).put(controller.update).delete(controller.remove);return router;};
