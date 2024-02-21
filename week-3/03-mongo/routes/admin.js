const express  = require("express");
const adminMiddleware = require("../middleware/admin");
const router = express.Router();
const {Admin, Course} = require('../db/index')

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username,
        password
    })
    res.status(200).json({
        message: 'Admin created successfully'
    })
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const newCourse = await Course.create({
        title : req.body.title,
        description : req.body.description,
        price : req.body.price,
        imageLink : req.body.imageLink
    })
    res.status(200).json({
        message: 'Course created successfully', 
        courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const respone = await Course.find({});

    res.json({
        courses: respone
    })
});

module.exports = router;