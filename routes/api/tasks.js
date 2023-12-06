const express = require("express");

const {taskController} = require("../../controllers");
const {tasksSchemas} = require("../../schemas");
const {validateBody} = require("../../decorators");

const router = express.Router();


router.get("/", taskController.getAllMovies);

router.post("/", validateBody(tasksSchemas.taskAddSchema), taskController.addMovie);

router.put("/:id",validateBody(tasksSchemas.taskAddSchema), taskController.updateMovieById);

router.delete("/:id", taskController.deleteMovieById);

module.exports = router;