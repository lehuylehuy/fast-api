import  express  from "express";
import bodyParser from "body-parser";
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
import connectDB from './config/connectDB';
require('dotenv').config(); // de su dung dc process.env; dung import cx dc

let app = express();

//config app 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRoutes(app);// nhungs cacs link vao app

connectDB();
let port = process.env.PORT || 6969; // lay port o file .env

app.listen(port, () => {
  console.log("Backend is running on port:" + port);
})
