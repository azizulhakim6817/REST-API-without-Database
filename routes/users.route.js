const {
  getAllUser,
  createUser,
  updateUsser,
  deleteUser,
} = require("../controllers/users.controller");

const users = require("../models/users.model");

const router = require("express").Router();

router.get("/", getAllUser);
router.post("/", createUser);
router.put("/:id", updateUsser);
router.delete("/:id", deleteUser);

module.exports = router;
