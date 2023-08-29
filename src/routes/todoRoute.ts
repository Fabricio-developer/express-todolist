import express, { Response } from "express";

const todoController = require("../controllers/todoController");
const router = express.Router();

router
  .route("/todos")
  .get(todoController.getAllTodos)
  .post(todoController.createTodo);

  router
    .route("/todos/:todoId")
    .get(todoController.getTodoById)
    .put(todoController.updateTodo)
    .delete(todoController.deleteTodo);

module.exports = router;
