const { User } = require("../database/models");

const validator = require('validator');
const formController = async (req, res) => {
  try {
    const { name, dob, email, phoneNumber } = req.body;
    if (!name || !dob || !email || !phoneNumber) {
      return res
        .status(400)
        .json({ success: false, message: "All Fields are required" });
    }
    let userData = await User.findOne({email:email})
    if(userData){
     return res.status(400).json({success:false,message:"Email Already Exists"})
    }
    if (!/^\d{10}$/g.test(phoneNumber.trim())) {
      return res.status(400).json({ error: "Invalid phone number" });
    }
    const newUserData = new User({
      name: name,
      dob: dob,
      email: email,
      phoneNumber: phoneNumber,
    });
   const data=  await newUserData.save();
   if(data){
    return res.status(200).json({success:true,message:data})
   }
   return res.status(400).json({success:false, message:"Invalid Details"})

  } catch (e) {
    console.log(e)
    res.status(500).json("Internal Server Error")
  }
};

module.exports = formController;
