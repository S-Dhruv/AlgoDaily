import express from "express";
import passport from "passport"
import QuestionModel from "../model/Questions.js";
import DailyModel from "../model/Daily.js"
const Router = express();
import jwt from "jsonwebtoken"
import UserModel from "../model/User.js";

Router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

Router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:5173",
  }),
  (req,res)=>{
    console.log("Redirecting...");

    const {email}= req.user;
    console.log(email);
    res.redirect(`http://localhost:5173/dashboard?email=${email}`);
}
);
Router.get("/firstLogin/:email", async (req, res) => {
    try {
      const  email  = req.params.email; 
      const login = await DailyModel.findOne({ email });
  
      if (login) {
        res.status(200).json({ message: "Already logged in today" });
      } else {
        await DailyModel.create({ email });
        console.log("Saved");
        res.status(201).json({ message: "First log in" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
Router.get("/logout",(req,res)=>{
    req.logout();
    res.redirect(process.env.CLIENT_URL)
})

Router.get("/dashboard/:email", async (req, res) => {
    try {
        let nums = new Set();  // Use Set to avoid duplicate questions
        while (nums.size < 3) {
            nums.add(Math.floor(Math.random() * (3445 - 1 + 1)) + 1);
        }

        let questions = [];

        for (let num of nums) {
            const questionData = await QuestionModel.findOne({ question_number: num });
            if (questionData) {
                questions.push({
                    title: questionData.title,
                    link: questionData.link
                });
            }
        }
        console.log(questions)
        res.status(200).json({ questions });

        try{
            const email = req.params.email;
            const user = await UserModel.find({email})
            if(user){
                user.logins.push(new Date());
                await user.save();
                console.log("Today's login stored");
            }
        }
        catch(err){
            console.log(err);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default Router;