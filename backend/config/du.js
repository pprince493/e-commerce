import mongoose from "mongoose";
import Colors from "colors";
const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to mongodb database ${conn.connection.host}`.bgMagenta.white)
    }catch(error){
        console.log(`Error in mongo db ${error}`.bgRed.white)
    }
}

export default connectDB;