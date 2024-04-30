import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const { ObjectId } = Schema.Types;

const jobTypeSchema = new Schema({
    jobTypeName: {
        type: String,
        trim: true,
        required: [true, 'job category is required'],
        maxlength: 70,
    },
    
    user: {
        type: ObjectId,
        ref: "User",
        required: true
    },
}, { timestamps: true });

export default model("JobType", jobTypeSchema);
