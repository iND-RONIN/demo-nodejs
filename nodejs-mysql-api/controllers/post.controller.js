//const app  = require('../app');
const models=require('../models');
//const post = require('../routes/posts')

function save(req,res) {
	

    const post ={
		title      :req.body.title,
		content    : req.body.content,
		imageurl   : req.body.image_url,
		categoryid :req.body.category_id,
		userid     : 1
               	}

        models.Post.create(post).then(result =>{
     	res.status(201).json({
		message: "post created succsessfully", 
		post:result
	                    });
	     
        }).catch(error => {
	    res.status(500).json({
		  message: "something went wrong",
		   error:error
	                       });

});

}

module.exports ={
	save:save // other files can now acess this file f
} 
