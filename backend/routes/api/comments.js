/**
 * GET /:postId - Retrieve all comments for a specific post
 * @route GET /api/comments/:postId
 * @param {string} req.params.postId - The ID of the post
 * @returns {Object[]} Array of comment objects sorted by creation date (newest first)
 * @throws {Error} 500 - Server error
 */

/**
 * DELETE /:commentId - Delete a comment by its ID
 * @route DELETE /api/comments/:commentId
 * @param {string} req.params.commentId - The ID of the comment to delete
 * @returns {Object} Success message upon deletion
 * @throws {Error} 404 - Comment not found
 * @throws {Error} 500 - Server error
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey GitHub Copilot,
router.get(
    "/:postId",
    async (req, res) => {
        try {
            const comments = await Comment.find({ postId: req.params.postId }).sort({ createdAt: -1 });
            res.json(comments);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Server error" });
        }
    }

)
// Delete a comment by ID
router.delete(
    "/:commentId",
    async (req, res) => {
        try {
            const comment = await Comment.findByIdAndDelete(req.params.commentId);
            if (!comment) {
                return res.status(404).json({ error: "Comment not found" });
            }
            res.json({ message: "Comment deleted" });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Server error" });
        }
    }
)
