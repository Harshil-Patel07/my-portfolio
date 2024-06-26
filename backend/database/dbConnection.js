import mongoose from "mongoose"

const dbConnection=()=>{
    mongoose
    .connect(process.env.MONGO_URL,{
        dbName:"PORTFOLIO"
    }).then(()=>{
        console.log("connected with database.")
    }).catch((error)=>{
        console.log(`Monogdb connection error : ${error}`)
    })
  
}

export default dbConnection;



