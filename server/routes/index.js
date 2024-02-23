const express = require("express");
const bookmarkRouter = require("./bookmark");
const userRouter = require("./user");
const recookRoute = require("./recook");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello World!",
  });
});

router.use("/bookmark", bookmarkRouter);
router.use("/users", userRouter);
router.use("/recooks", recookRoute);

module.exports = router;
