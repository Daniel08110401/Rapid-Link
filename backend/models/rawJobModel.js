import mongoose from "mongoose";
const { Schema, model } = mongoose;

const rawJobDataSchema = new Schema({
    url:{
        type: String,
        required : [true, 'Url is required'],
    },
    
    html_content : {
        type: String,
        trim: true,
        required : [true, 'raw job data is required'],
    }
},  { timestamps: true })

export default model("RawJobData", rawJobDataSchema);