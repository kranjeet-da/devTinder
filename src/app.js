const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.use(express.json());

app.post("/signup", async (req, res)=>{
    const user = new User(req.body);

    try{
        await user.save();
        res.send("User create successfully!");
    } catch (err){
        res.status(400).send("Error saving the user:" + err.message);
    }
});

connectDB().then(()=> {
    console.log("Database connection established...");
    app.listen(3000, () => {
    console.log("Server is successfuly running on port 3000...")
    });
   }).catch((err) => {
    console.log("Database cannot be connected !!");
   });

