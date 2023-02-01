const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const database = require('./config/database.js');
const authRouter = require('./routes/auth.js')
const dotenv = require('dotenv');
dotenv.config()


const app = express();  
app.use((req, res, next) => {
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');
    next();
  });
app.use(bodyParser.json({limit:'30mb', extended: true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended: true}))


app.use('/',authRouter)

const PORT = process.env.PORT || 5000;
database();

app.listen(PORT, () => {
    console.log("Server is running", PORT);
})