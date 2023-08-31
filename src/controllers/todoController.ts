import mongoose from "mongoose";
import { Request, Response } from "express";
import moment from "moment";

const todoModel = require("../models/todoModel");

const Todo = mongoose.model("Todo");

// retrieve all todos
const getAllTodos = async (req: Request, res: Response) => {
  await Todo.find({})
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Returning todos",
        data: result,
      });
    })
    .catch((err) => {
      if (err) return res.status(400).send(err);
    });
};

const createTodo = async (req: Request, res: Response) => {
  const data = new todoModel({
    title: req.body.title,
    description: req.body.description,
    deadline: req.body.deadline,
    user: req.body.user,
  });

  try {
    const dataToSave = await data.save();
    res.status(201).json(dataToSave);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getTodoById = async (req: Request, res: Response) => {
  await Todo.findById(req.params.id)
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Returning todo",
        data: {
          id: result._id,
          title: result.title,
          description: result.description,
          deadline: moment(result.deadline).format("MM/DD/YYYY h:mm"),
        },
      });
    })
    .catch((err) => {
      if (err.kind == "ObjectId")
        return res.status(400).send({ message: "Invalid id" });

      if (Object.keys(err).length == 0)
        return res.status(200).json({ message: "Todo not found", data: [] });

      return res.status(400).json(err);
    });
};

const updateTodo = async (req: Request, res: Response) => {
  await Todo.updateOne({ _id: req.params.id }, req.body)
    .exec()
    .then((result) => {
      res.status(201).json(result.acknowledged);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Todo" });
    });
};
const deleteTodo = async (req: Request, res: Response) => {
  await Todo.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).send({ message: "Todo deleted." });
    })
    .catch((err) => {
      res.status(500).send({ message: "Error deleting Todo" });
    });
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
