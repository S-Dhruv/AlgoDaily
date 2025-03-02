import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRoutes from "./routes/UserRoutes.js";
import session from "express-session";
import passport from "passport"; 
import DailyModel from "./model/Daily.js";
import "./passport.js"; 
import cron from 'node-cron';
import path from "path";

dotenv.config();

const app = express();
const __dirname = path.resolve();


//cookie creation
app.use(
    session({
        secret: process.env.SESSION_KEY,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true }, // Set to `true` in prod  uction with HTTPS
    })
);
//passport for auth
app.use(passport.initialize());
app.use(passport.session());

//cors issue resolution
// app.use(cors({
//     origin: "http://localhost:5173",
//     methods:"GET,DELETE,POST,PUT",
//     credentials: true, 
// }));

app.use(cors());
//to accept data as json
app.use(express.json()); 

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("*", (req,res)=>{
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    })
}

//user routes here
app.use( "/auth",UserRoutes)

app.post('/ask', async (req, res) => {
    const { question } = req.body;
    console.log('Received question:', question);  // Debug log
    
    if (!question) {
        console.log('No question received');
        return res.status(400).json({ error: 'Question is required' });
    }

    try {
        const response = await axios.post('http://127.0.0.1:5000/ask', { 
            question 
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        console.log('Successfully got response from Flask');  // Debug log
        return res.json(response.data);
        
    } catch (error) {
        console.error('Error details:', {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status
        });
        
        return res.status(500).json({ 
            error: 'Error communicating with AI service',
            details: error.response?.data || error.message
        });
    }
});


//clearing daily db
// setInterval(async () => {
//     try {
//       await DailyModel.deleteMany({}); // This will delete all documents in the collection
//       console.log("Collection cleared successfully at:", new Date());
//     } catch (err) {
//       console.error("Error clearing collection:", err);
//     }
//   }, 60000); 
const connectDb = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${db.connection.id}`);
    } catch (err) {
        console.error("Error connecting to MongoDB:", err.message);
    }
};
async function clearDatabase() {
    try {
      await DailyModel.deleteMany({}); // This clears all documents in the collection
      console.log('Database cleared successfully!');
    } catch (err) {
      console.error('Error clearing the database:', err);
    }
  }

  // Schedule the task to run at midnight every day
  cron.schedule('0 0 * * *', () => {
    console.log('Clearing database at midnight...');
    clearDatabase();
  });
  
app.listen(3001, async () => {
    await connectDb(); 
    console.log("Backend initialized at port 3001");
});
export default app;