const express = require('express');
// const { router } = require('../app');

const postsController= require('../controllers/post.controller');


const router=express.Router();  //inside the express object we can now acess the router tr
router.post("/",postsController.save);

module.exports=router;