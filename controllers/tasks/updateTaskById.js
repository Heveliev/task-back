const {tasksService} = require("../../models");
const {HttpError} = require("../../helpers");


const updateTaskById = async(req, res) => {
    const {id} = req.params;
    const result = await tasksService.updateTaskById(id,req.body);
    if(!result) {
        throw HttpError(404, `Task with ${id} not found`);

    };
    res.json(result);
};

module.exports = updateTaskById;