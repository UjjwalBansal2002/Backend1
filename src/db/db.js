import { mongoose} from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB=async ()=>{
    try{
        await mongoose.connect(`mongodb+srv://bansalujjwal1810:ujjwal2002@cluster0.pma48pi.mongodb.net/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST`)
    }catch (error){
        console.log("MONGODB connection error ",error);
        process.exit(1)
    }
}


export default connectDB