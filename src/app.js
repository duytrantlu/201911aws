// 'use strict'
require('dotenv').config()
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import routes from "./routes/route";

const app = express();
app.use(bodyParser.json());
app.use("/api", routes);

const port = process.env.NODE_PORT || 4000;
http.createServer(app)
.listen(port, function(){
  console.log(`Server is running on port ${port}`);
})