

const getAllBookmark = async (req, res) => {
    try {
        const snapshot = await db.collection("bookmarks").get();
        const data = snapshot.docs.map((doc) => doc.data());
        res.status(200).json({ message: "Data retrieved successfully", data });
    } catch (error) {
        console.error("Error getting bookmarks:", error);
        res
            .status(500)
            .json({ error: "Failed to get bookmarks: " + error.message });
    }
}

const updateBookmark = async (req, res) => {
    const data = req.body;
    const id = req.params.id;

    try {
        await db.collection("bookmarks").doc(id).update(data);
        res.status(200).json({ message: "Data updated successfully" });
    } catch (error) {
        res
            .status(500)
            .json({ message: "Error updating data", error: error.message });
    }
};

module.exports = { getAllBookmark, updateBookmark};