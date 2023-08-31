import express, { Response } from "express";

const todoController = require("../controllers/todoController");
const router = express.Router();

router
  .route("/user")
  .post(todoController.createUser);

  router
    .route("/user/:id")
    .get(todoController.getUser)
    .put(todoController.updateUser)
    .delete(todoController.deleteUser);

module.exports = router;
