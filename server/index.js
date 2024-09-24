const express = require('express') // requiring express
const app = express(); //invoking it to make a server applicatoin - thats what app is
require('dotenv').config()
const API_KEY = process.env.API_KEY //accessing the api key

const path = require('path')
const pathToDist = path.join(__dirname, '../giphy-search/dist')
//dirname gives absolute path to the 
const serveStatic = express.static(pathToDist);

const serveGifs = async (req, res, next) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`)
    const data = await response.json()
    res.send(data);
};

app.get("/api/gifs", serveGifs);
app.use(serveStatic);

const PORT = 8080
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
