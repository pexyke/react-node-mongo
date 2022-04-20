const express = require("express");
const router = express.Router();
const { queryAllUsers, queryUsersById, queryUsersByUsername } = require("../controllers/controllers");
const loggerMiddleware = require("../middleware/logger");

router.get("/", [loggerMiddleware, queryAllUsers]);
router.get("/id/:id", [loggerMiddleware, queryUsersById]);
router.get("/username/:username", [loggerMiddleware, queryUsersByUsername]);

module.exports = router;
