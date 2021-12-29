const router = require("express").Router();
const {
  findDiscussionById,
  findDiscussionsByUser,
  createNewDiscussion,
  getAllDiscussions,
  addNewComment,
  deleteDiscussion,
  updateDiscussion
} = require("../controllers/discussion.controller");
const {
  discussionValidationSchema,
  commentValidationSchema,
} = require("../validations/discussion.validator");
const { validateSchema } = require("../middlewares/validate.middleware");
const { checkAdminKey } = require("../middlewares/admin.middleware");
const { fetchUserInCollection } = require("../middlewares/user.middleware");
const {
  fetchDiscussion,
  verifyAuthor,
} = require("../middlewares/discussion.middleware");

const validateDiscussion = validateSchema(discussionValidationSchema);
const validateComment = validateSchema(commentValidationSchema);

router.post(
  "/new",
  fetchUserInCollection,
  validateDiscussion,
  createNewDiscussion
);
router.get("/user/:username", findDiscussionsByUser);
router.get("/id/:id", findDiscussionById);
router.get("/all", checkAdminKey, getAllDiscussions);
router.patch("/id/:id", verifyAuthor, updateDiscussion)
router.put(
  "/:id/comment",
  fetchUserInCollection,
  fetchDiscussion,
  validateComment,
  addNewComment
);
router.delete("/id/:id", verifyAuthor, deleteDiscussion);

module.exports = router;
