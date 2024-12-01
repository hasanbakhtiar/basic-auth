const express = require("express");
const { userAdd, authUser, userList, singleUser } = require("../controllers/user");
const isAdmin = require("../middlewares/isAdmin");
const auth = require("../middlewares/auth");
const router = express.Router();


router.post("/register", userAdd);
router.post("/login", authUser);


router.get("/users",[auth,isAdmin], userList);
router.get("/:id",[auth,isAdmin], singleUser);



module.exports = router;
