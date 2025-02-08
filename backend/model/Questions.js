import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
    question_number: {
        type: Number,
        required: true,
    },
    title: {
        type: String,  
    },
    link: {
        type: String, 
    },
});

const QuestionModel = mongoose.model("question", QuestionSchema);

export default QuestionModel;
