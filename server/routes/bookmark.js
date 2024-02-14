const express = require("express");
const { getAllBookmark, updateBookmark, getBookmarkById, deleteBookmark, addBookmark } = require("../controllers/BookmarkControllers");
const bookmarkRouter = express.Router();

bookmarkRouter.post("/", addBookmark);
bookmarkRouter.get("/", getAllBookmark);
bookmarkRouter.get("/:id", getBookmarkById);
bookmarkRouter.put("/:id", updateBookmark);
bookmarkRouter.delete("/:id", deleteBookmark);

module.exports = bookmarkRouter;
