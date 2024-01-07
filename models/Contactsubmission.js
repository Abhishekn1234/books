const mongoose=require("mongoose")
const submissionSchema = new mongoose.Schema({
    Name: String,
    email: String,
    Address:String,
    mobileNumber: String,
    message: String,
  });
  
  const Submission = mongoose.model('Submission', submissionSchema);
  module.exports=Submission;