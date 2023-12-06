const {ctrlWrapper} = require("../../decorators");

const getAllTasks = require("./getAllTasks");
const addTask = require("./addTask");
const updateTaskById = require("./updateTaskById");
const deleteTaskById = require("./deleteTaskById");


module.exports = {
    getAllMovies: ctrlWrapper(getAllTasks),
    addMovie: ctrlWrapper(addTask),
    updateMovieById: ctrlWrapper(updateTaskById),
    deleteMovieById: ctrlWrapper(deleteTaskById),
};