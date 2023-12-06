const {tasksService} = require("../../models");

const addTask = async(req, res) => {
    const result = await tasksService.addTask(req.body);
    res.status(201).json(result);
};

module.exports = addTask;