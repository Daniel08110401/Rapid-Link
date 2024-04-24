import mongoose from "mongoose";
const { Schema, model } = mongoose;
const { ObjectId } = Schema.Types;


const jobSchema = new Schema({
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

    title: {
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

    deadline: {
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

export default model("Job", jobSchema);