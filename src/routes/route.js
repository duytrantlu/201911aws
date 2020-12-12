// 'use strict'
import express from "express";
import multer from "multer";
import { uploadConnector } from '../connectors';

const router = express.Router();

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

router.post("/upload", upload.single("file"), function(req, res) {
    const file = req.file;
    let filelocation;
    uploadConnector.uploadFile(file.buffer, file.originalname)
    .then((response) => {
        console.log("<<Uploaded file to S3>>")
        console.log(response);
        filelocation = response.Location;
        res.status(200).send({filelocation})
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send('Error')
    })
});

router.post('/index', (req, res) => {
    const user = {
        name: "Duy",
        age: 27
    };
    res.status(200).json(user);
})

module.exports = router;