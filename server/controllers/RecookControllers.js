const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const { db } = require("../libs/firebase");

cloudinary.config({
  cloud_name: "djgk8atpr",
  api_key: "997841841953571",
  api_secret: "sYeIYyLQVIvVs00CpsD7x4NtA7s",
  secure: true,
});

const createRecook = async (req, res) => {
  try {
    const files = req.files;

    if (!files || files === null) {
      return res.status(400).json({ message: "No Files Uploaded" });
    }

    const body = req.body;

    const { uid, id_recipe, name } = body;

    const uploadPromises = files.map((file) => {
      return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(file.path, (error, result) => {
          if (error) {
            return reject(error);
          }
          fs.unlinkSync(file.path);
          resolve(result);
        });
      });
    });

    Promise.all(uploadPromises)
      .then(async (results) => {
        console.log(results);
        const newRecook = await db.collection("recooks").add({
          uid: uid,
          id_recipe: Number(id_recipe),
          images: results,
          name: name,
        });
        console.log(newRecook);
        return res.status(201).json({ newRecook });
      })
      .catch((error) => {
        res
          .status(400)
          .json({ message: "Failed to Upload File", error });
      });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {createRecook}
