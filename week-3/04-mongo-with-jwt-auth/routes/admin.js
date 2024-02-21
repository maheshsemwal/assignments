const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');
const {Admin, User, Course} = require('../db');

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;


    const user = await Admin.create({
        username,
        password
    })
    if(user){
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            msg : 'Admin created Succesfullly'
        })
    }else{
        res.status(500).json({
            msg : "Internal server error"
        })
    }

});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;


    const user = await User.find({
        username,
        password
    })
    if(user){
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            token
        })
    }else{
        res.status(500).json({
            msg : "Incorrect Email or password"
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const newCourse = await Course.create({
        title : req.body.title,
        description : req.body.description,
        imageLink : req.body.imageLink,
        price  : req.body.price
    })
    if(newCourse){
        res.json({
            essage: 'Course created successfully', 
            courseId: newCourse._id
        })
    }
    else{
        res.status(500).json("Internal Server Error");
    }
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    try{

        const response = await Course.find({});
        res.json({
            course : response
        })
    }
    catch(e){
        res.json({
            e
        })
    }
});

module.exports = router;