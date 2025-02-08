import mongoose from "mongoose";

const DailySchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
});

const DailyModel = mongoose.model("daily", DailySchema);

export default DailyModel;
