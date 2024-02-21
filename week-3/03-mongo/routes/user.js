const { Router, express } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    try{
        User.create({
            username,
            password
        })
        res.status(200).json({
            message: "User created successfully"
        })
    }
    catch(e){
        res.status(500).json({
            message : "Internal Server Error"
        })
    }

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try{

        const response = await Course.find({})
        res.json({
            courses: response
        })
    }
    catch(e){
        res.status(500).json({
            message : "Some error Occured"
        })
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username : username
    },{
        "$push": {
            purchasedCourses: courseId
        }
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });
    
    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router