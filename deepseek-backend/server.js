require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;
const DEEPSEEK_API = "http://localhost:11434/";

app.use(cors());
app.use(express.json());

app.post("/api/deepseek", async(req,res) => {
    try{
        const { prompt } = req.body;
        console.log(req.body);
        const response = await axios.post("http://localhost:11434/v1/chat/completions",{
            model: "deepseek-r1",
            messages: [{role:"user",content: prompt}],
        });
        res.json(response.data);
    }catch(error){
        console.error("Error:", error.message);
        res.status(500).json({error:"Failed to communicate with Deepseek-R1"})
    }
});

app.listen(PORT, ()=>console.log(`Server running on http://localhost:${PORT}`));