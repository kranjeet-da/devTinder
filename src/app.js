const express = require("express");

const app = express();

app.use("/hello/2", (req, res) =>{
    res.send("Abracadabra");
});

app.use("/hello", (req, res) =>{
    res.send("Hello hello hello");
});

app.use("/test",(req, res)=>{
    res.send("Hello from server!");
});

app.use("/", (req, res) =>{
    res.send("From server end");
});

app.listen(3000, () => {
    console.log("Server is successfuly running on port 3000...")
});