const mongoose=require('mongoose')

const schema = new mongoose.Schema(
    {
   name:{
    type: String,
    required:true
   }
   ,
  dob: {
    type: Date,
    required: true
  },
   email:{
    type:String,
    required:true,
    validate: {
        validator: function(v) {
          return /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(v);
        },
        message: props => `${props.value} is not a valid email address!`
      }
   },
   phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /\d{10}/.test(v); 
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  }
})

module.exports.User= mongoose.model("Form", schema);