const express = require("express");
const { getAllBookmark, updateBookmark, getBookmarkById, deleteBookmark } = require("../controllers/BookmarkControllers");
const bookmarkRouter = express.Router();

bookmarkRouter.get("/", getAllBookmark);
bookmarkRouter.put("/:id", updateBookmark);
bookmarkRouter.get("/:id", getBookmarkById);
bookmarkRouter.delete("/:id", deleteBookmark)

module.exports = bookmarkRouter;
