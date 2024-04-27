const express = require('express');
const GenerateResponse = require('../../utils/response_creator');
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        // Extract user credentials from request body
        const authReqObj = req.body;

        // Check if both email and password are provided
        if (!authReqObj.hasOwnProperty('email') || !authReqObj.email.trim().length || 
            !authReqObj.hasOwnProperty('passwd') || !authReqObj.passwd.trim().length) {
            return res.status(400).json(new GenerateResponse(false, "Email and password are required"));
        }

        // Find user by email and password
        const user = await User.findOne({ email: authReqObj.email, password: authReqObj.passwd }, { isadmin: 1, username: 1, email: 1 }).lean();

        // If user is found, send user details in response
        if (user) {
            return res.json(new GenerateResponse(true, null, user));
        } else {
            return res.json(new GenerateResponse(false, "User not found", null));
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json(new GenerateResponse(false, "Internal Server Error"));
    }
});

module.exports = router;
