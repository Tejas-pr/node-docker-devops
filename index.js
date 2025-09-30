const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi there!!");
});

app.listen(3000, () => {
    console.log("the app is running on the port 3000");
});

console.log("The env is : ", process.env.DATABASE);
