const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {Admin, User, Course} = require("../db")
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET;

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    
    let user = await User.find(username => username === username);
    if(user){
        res.json({
            msg: "user already Exists"
        })
    }

    user = await User.create({
        username,
        password
    })
    if(user){
        const token = jwt.sign({username}, JWT_SECRET);
        res.status(200).json({
            msg: "user created successfully"
        })
    }
    else{
        res.status(500).json({
            msg: "Internal server error"
        })
    }
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic

});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    res.json({
        msg: "hello how r u?"
    })
});

module.exports = router