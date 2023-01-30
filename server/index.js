const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const database = require('./config/database.js');
const dotenv = require('dotenv');
dotenv.config()


const app = express();  
app.use(cors)
app.use(bodyParser.json({limit:'30mb', extended: true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended: true}))


const PORT = process.env.PORT || 3000;
database();

app.listen(PORT, () => {
    console.log("Server is running", PORT);
})