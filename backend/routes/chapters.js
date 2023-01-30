const express=require('express');
const { createChapters,
        getChapters,
        getchapter,
        deleteChapter,
        updateChapter
 } = require('../contollers/chaptersController');

const router=express.Router()


//GET all chapters
router.get('/',getChapters)


//GET a single chapters
router.get('/:id',getchapter)

//POST A NEW chapters || using req u can access data
router.post('/',createChapters)


//image



//Delete a  chapter
router.delete('/:id', deleteChapter)



//Update a chapter
router.patch('/:id', updateChapter)

module.exports=router