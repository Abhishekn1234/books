
const express=require("express");
const router=express.Router();
const Submission = require('../models/Contact');

router.post('/submit-form', async (req, res) => {
  try {
    const { fullName, email, mobileNumber, message } = req.body;

    
    const newSubmission = new Submission({
      fullName,
      email,
      mobileNumber,
      message,
    });

    await newSubmission.save();

    
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
module.exports=router;