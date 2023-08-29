import mongoose, { Error } from "mongoose";
import { Request, Response } from "express";

const todoModel = require("../models/todoModel");

const Todo = mongoose.model("Todo");

// retrieve all todos
const getAllTodos = async (req: Request, res: Response) => {
  await Todo.find({})
    .exec()
    .then((result) => {
      res.status(200).json({
        message: 'Returning todos',
        data: result
      });
    })
    .catch((err) => {
      if (err) return res.status(400).send(err);
    });
};

const createTodo = async (req: Request, res: Response) => {
  const data = {
    title: req.params.title,
    description: req.params.description,
    deadline: req.params.deadline,
    user: req.params.user,
  };
//   const data = new todoModel({
//     title: req.params.title,
//     description: req.params.description,
//     deadline: req.params.deadline,
//     user: req.params.user,
//   });
return data;
//   res.json(data);

//   try {
//     const dataToSave = await data.save();
//     res.status(201).json(dataToSave);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
};

const getTodoById = (req: Request, res: Response) => {
    res.status(200).send({ message: 'connected' });
}
const updateTodo = (req: Request, res: Response) => {
    res.status(200).send({ message: 'connected' });
}
const deleteTodo = (req: Request, res: Response) => {
    res.status(200).send({ message: 'connected' });
}

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
}