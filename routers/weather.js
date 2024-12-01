const express = require("express");
const { weatherList, weatherAdd } = require("../controllers/weather");
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");
const router = express.Router();


router.get('/',auth,weatherList);
router.post('/',[auth,isAdmin],weatherAdd);

module.exports = router;