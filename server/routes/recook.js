const express = require("express");
const { createRecook } = require("../controllers/RecookControllers.js");
const upload = require("../libs/multer.js");

const recookRoute = express.Router();

recookRoute.post("/", upload.array("files", 3), createRecook);

module.exports = recookRoute;
