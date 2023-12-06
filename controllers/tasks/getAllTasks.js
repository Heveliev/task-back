const {tasksService} = require("../../models");
const getAllTasks = async(_,res) => {
    const result = await tasksService.getAllTasks();
    res.json(result);
};

module.exports = getAllTasks;