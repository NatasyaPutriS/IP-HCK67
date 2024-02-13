const express = require("express");
const { getAllBookmark, updateBookmark } = require("../controllers/BookmarkControllers");
const bookmarkRouter = express.Router();

bookmarkRouter.get("/", getAllBookmark);
bookmarkRouter.put("/:id", updateBookmark);

module.exports = bookmarkRouter;
