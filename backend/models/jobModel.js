import mongoose from "mongoose";
import { ObjectId } from "mongoose.Schema";


const jobSchema = new mongoose.Schema({
    company: {
        type: String,
        trim: true,
        required : [true, 'Company is required'],
        maxlength : 20,
    },
    description: {
        type: String,
        trim: true,
        required : [true, 'Description is required'],
    },
    jobTitle: {
        type: String,
        trim: true,
        required : [true, 'Job Title is required'],
        maxlength : 70,
    },
    jobType: {
        type: ObjectId,
        ref: "JobType",
        required: true
    },
    location: {
        type: String,
    },
    deadLine: {
        type: String,
        trim: true,
        required : [true, 'Deadline is required'],
    },
    available: {
        type: Boolean,
        default: true,
    },
    user: {
        type: ObjectId,
        ref: "User",
        required: true
    },


    
}, { timestamps: true })

export default mongoose.model("Job", jobSchema);