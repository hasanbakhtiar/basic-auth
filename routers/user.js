const express = require("express");
const {
  userList,
  userAdd,
  userEdit,
  userDelete,
  singleUser,
} = require("../../controllers/user");
const router = express.Router();

router.get("/", userList);
router.get("/:id", singleUser);
router.post("/", userAdd);
router.put("/:id", userEdit);
router.delete("/:id", userDelete);

module.exports = router;
