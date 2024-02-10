const mongoose=require('mongoose');


module.exports.mongoDb=()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Database Successfully Connected")
    }).catch((err)=>{
        console.log(err)
    })
}