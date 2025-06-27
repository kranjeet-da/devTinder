const express = require("express");

const app = express();

app.get("/user/:userId/:name/:password", (req, res) => {
    console.log(req.params)
    res.send({firstName:"Ranjeet", lastName:"Kumar"});
});

app.listen(3000, () => {
    console.log("Server is successfuly running on port 3000...")
});