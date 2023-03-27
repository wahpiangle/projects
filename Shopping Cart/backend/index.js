const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()

app.use(express.json());
app.use(cors());

//req is from the client, res is from the server
app.get("/api", (req, res) => {
    res.send("hello from server");
});

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})