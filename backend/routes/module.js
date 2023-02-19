const express=require('express');
const {
        createModule
 } = require('../contollers/courseController');

const router=express.Router()
const requireAuth=require('../middleware/requireAuth')

//require auth for all workout routes
router.use(requireAuth)



//POST A NEW single module  || using req u can access data
router.post('/',createModule)


module.exports = router;